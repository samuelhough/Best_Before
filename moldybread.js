var fs = require('fs'),
	repl = require('repl'),
	BestDate = require('./bestDate.js');

// When passed an filepath via -filepath.  Read the file and set it to the body variable
if(process.argv.length > 2){
	var fPath = process.argv[2];
	fPath = fPath.split('-')[1];
	var fileBody = fs.readFileSync(fPath).toString().trim();
	var newDate = new BestDate(fileBody);

	console.log(newDate.result);

} else {
	console.log("You need to specify a file as the argument. Ex: '$ node moldybread.js -sampleDate.txt'");
}

