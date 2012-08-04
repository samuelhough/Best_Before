var BestDate = require('../bestDate.js'),
	assert = require('assert'), 
	illegal = ' is illegal'
	

// Will work on a leap year
var leapYear = new BestDate('0/2/29');
assert.equal(leapYear.result,'2000-02-29');

// Will not work on a year that is not a leap year
var illegalVal = '2100/02/29';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result,illegalVal +illegal);

illegalVal = '2500/02/29';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result,illegalVal+illegal);

illegalVal = '2013/02/29';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result,illegalVal+illegal);

// Invalid dates are not able to be parsed
illegalVal =  '31/9/73';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+illegal);

illegalVal = '31/99/73';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+illegal);

illegalVal = '99/99/99';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+illegal);

illegalVal = '0/0/0';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+illegal);

illegalVal = '3900/1/3';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+illegal);

illegalVal = '900/32/3'
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal + illegal);

illegalVal = '0/0/12';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '13/-1/12';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '{}';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);


illegalVal = 'null';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '0/0/0';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '0/1/0';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);


// Check month lengths are valid
illegalVal = '0/1/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '0/2/30';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/2/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/4/31';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/5/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/6/31';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/7/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/7/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/8/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/9/31';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);


illegalVal = '2001/10/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);


illegalVal = '2001/11/31';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);

illegalVal = '2001/11/32';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);


illegalVal = '3000/1/1';
leapYear = new BestDate(illegalVal);
assert.equal(leapYear.result, illegalVal+ illegal);


// Bounds produce legal values
legalVal = '2999/12/30';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2999-12-30');


legalVal = '999/12/30';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2999-12-30');


legalVal = '999/12/10';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2999-10-12');


legalVal = '0/1/10';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2000-01-10');

legalVal = '0/10/1';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2000-01-10');

legalVal = '10/100/1';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2100-01-10');

legalVal = '10/12/1';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2001-10-12');

legalVal = '05/05/05';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2005-05-05');


legalVal = '05/5/6';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2005-05-06');

legalVal = '05/06/6';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2005-06-06');

legalVal = '05/06/05';
leapYear = new BestDate(legalVal);
assert.equal(leapYear.result, '2005-05-06');

console.log("All tests passed");

