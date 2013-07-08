# Best_Before
A programming puzzle challenge

#Best Before - Programming Puzzle

An attempt to solve a puzzle that asks the programmer to always output the earliest possible date from a cobination of numbers.  The possible input is always formatted with three numbers which can all be 0 based or not.  
The result should always be the earliest possible date, but if the date is impossible to parse the result should be a message noting that the input was invalid.


##Built in node.js
I built this puzzle in node.js.  It can be run by navigating to the sample direcectory and executing:
###node moldybread.js -[filename].txt

##Expected input/Output:

0/1/1 => 2000-01-01

02/4/67 => 2067-02-04

2000/2/1 => 2000-02-01

31/9/73 => 31/9/73 is illegal

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2013 SamuelHough  
Licensed under the MIT license.
