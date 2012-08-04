var fs = require('fs'),
	BestDate = require('./bestDate.js');

// When passed an filepath via -filepath.  Read the file and set it to the body variable
if(process.argv.length > 2){
	var fPath = process.argv[2];
	fPath = fPath.split('-')[1];
	var fileBody = fs.readFileSync(fPath).toString().trim();
	
	
	// Take the contents from the input file and find the result.
	// Alternatively, you could give the input to the constructor instead
	// of trying to load from a file if necessary
	var newDate = new BestDate(fileBody);
	console.log(newDate.result);

} else {
	console.log("You need to specify a file as the argument. Ex: '$ node moldybread.js -sampleDate.txt'");
}

