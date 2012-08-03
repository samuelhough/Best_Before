module.exports = (function(){
	function BestDate(dateString){
		// Catch invalid input types
		if(!dateString || typeof dateString !== 'string'){ this.invalidDate(dateString); }
		
		this.dateArr = dateString.split('/');
		
		// Catch invalid formatting
		if(this.dateArr.length !== 3) { this.invalidDate(dateString); return; }
		
		var self = this;
		var yearArr = [],
			monthArr = [],
			dayArr = [];
		
	
		// Convert values to integers in base 10
		this.dateArr.forEach(function(date, i){
			self.dateArr[i] = parseInt(date, 10);
		})
		
		// Sort the array and stuff the values in each yy/mm/dd array
		this.dateArr.sort(function(a,b){
			return a-b
		}).forEach(function(date, index){
			yearArr[yearArr.length] = monthArr[monthArr.length] = dayArr[dayArr.length] = {id: index, date: date};
		});
		
		// Only put elements into array if they fit min and max values
		// If there are no elements in that array, the string is invalid as that means there is no chance the item is valid
		yearArr = this.validateArr(yearArr, {	
				min: 0,
				max: 2999
		});
		if(yearArr.length < 1){ this.invalidDate(dateString); return; }	
		
		monthArr = this.validateArr(monthArr,{
				min: 1,
				max: 12
		});
		if(monthArr.length < 1){ this.invalidDate(dateString); return; }
		
		dayArr = this.validateArr(dayArr, {
				min: 1,
				max: 31
		});				
		if(dayArr.length < 1){ this.invalidDate(dateString); return; }	
		
		
		var smallValue = this.findSmallestDate(yearArr, monthArr, dayArr);		
		
		if(smallValue){
			this.result = smallValue.join('-');
		} else {		
			this.invalidDate(dateString);
		}
		
	}
	// Called when the value is invalid. 
	BestDate.prototype.invalidDate = function(str){ this.result = str + " is illegal"; }
	
	// Loop through the array given and remove any values that do not find within the bounds
	BestDate.prototype.validateArr = function(arr, config){
		if(undefined == config.max){ throw "Missing max" }
		if(undefined == config.min){ throw "Missing min" }
		
		for(var cur = 0; cur < arr.length; cur ++){
			if(arr[cur].date > config.max || arr[cur].date < config.min){
				arr.splice(cur, 1);			
			}
		}
		return arr;
	}
	
	
	// Loop through all of the arrays and call the function on all the combinations to find the smallest version
	BestDate.prototype.findSmallestDate = function(yearArr, monthArr, dayArr){
		
		var dLength = dayArr.length,
			mLength = monthArr.length,
			yLength = yearArr.length;
		
		
		
		for(var year = 0; year < yLength; year++){
			for(var month = 0; month < mLength; month++){
				for(var day = 0; day < dLength; day++){
					if(this.noDuplicates(yearArr[year],monthArr[month],dayArr[day]) && this.isValidForSet(yearArr[year], monthArr[month], dayArr[day])){
						return [this.prettify(yearArr[year].date, 'y'), this.prettify(monthArr[month].date,'m'), this.prettify(dayArr[day].date,'d')];
					}
				}
			}
		}
		return false;
	}
	
	// Prevent having the same value be used for multiple slots
	BestDate.prototype.noDuplicates = function(year, month, day){
		if(year.id === month.id || year.id === day.id || month.id === day.id){
			return false;
		} else {
			return true;
		}
	
	}
	// Return a pretty output version (0-base) of each value
	BestDate.prototype.prettify = function(val, type){
		switch(type){
			case 'y':
				val = this.makeYearFullLength(val);
				break;
			case 'm':
			case 'd':
				
				if(val.toString().length < 2){
					val = "0"+val
				}				
				break;
		}
		return val;
	}
	// Max days for each month (aside from leap year february)
	BestDate.prototype.monthDayLength = {
		'1': 31,
		'2': 28,
		'3': 31,
		'4': 30,
		'5': 31,
		'6': 30,
		'7': 31,
		'8': 31,
		'9': 30,
		'10': 31,
		'11':30,
		'12':31
	}
	BestDate.prototype.makeYearFullLength = function(year){
		// Turn any num/string into a 2000 based number
		var yearStr = year.toString();
		
		var yearStart = [2,0,0,0];
		var newYearArr = yearStr.split('');
		
		for(var cur = 0; newYearArr.length < 4; cur++){
			newYearArr.unshift(yearStart[3-newYearArr.length]);
		}
		
		return parseInt(newYearArr.join(''), 10);
	}
	BestDate.prototype.isValidForSet = function(year, month, day){
		
		var yearVal = this.makeYearFullLength(year.date),
			monthVal = month.date,
			dayVal = day.date;
		
	
	
		// Handle leap year values
		var leapYear = false;
		if(!(yearVal % 4) && monthVal === 2){
			leapYear = true;
			
		}
		if(!(yearVal % 100) && (yearVal % 400)){
			leapYear = false;
		}			
		if(leapYear){			
			if(dayVal <= 29){
				return true;
			} else {
				return false;
			}
		}
		
		// Handle all other months
		if(this.monthDayLength[monthVal.toString()] >= dayVal){
			return true;
		} else {
			return false;
		}
	}
	
	
	return BestDate;
}());