var BestDate = require('../bestDate.js'),
	assert = require('assert'), 
	illegal = ' is illegal'
	

// Will work on a leap year
var leapYears = [2000, 2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180, 2184, 2188, 2192, 2196, 2204, 2208, 2212, 2216, 2220, 2224, 2228, 2232, 2236, 2240, 2244, 2248, 2252, 2256, 2260, 2264, 2268, 2272, 2276, 2280, 2284, 2288, 2292, 2296, 2304, 2308, 2312, 2316, 2320, 2324, 2328, 2332, 2336, 2340, 2344, 2348, 2352, 2356, 2360, 2364, 2368, 2372, 2376, 2380, 2384, 2388, 2392, 2396, 2400, 2404, 2408, 2412, 2416, 2420, 2424, 2428, 2432, 2436, 2440, 2444, 2448, 2452, 2456, 2460, 2464, 2468, 2472, 2476, 2480, 2484, 2488, 2492, 2496, 2504, 2508, 2512, 2516, 2520, 2524, 2528, 2532, 2536, 2540, 2544, 2548, 2552, 2556, 2560, 2564, 2568, 2572, 2576, 2580, 2584, 2588, 2592, 2596, 2604, 2608, 2612, 2616, 2620, 2624, 2628, 2632, 2636, 2640, 2644, 2648, 2652, 2656, 2660, 2664, 2668, 2672, 2676, 2680, 2684, 2688, 2692, 2696, 2704, 2708, 2712, 2716, 2720, 2724, 2728, 2732, 2736, 2740, 2744, 2748, 2752, 2756, 2760, 2764, 2768, 2772, 2776, 2780, 2784, 2788, 2792, 2796, 2800, 2804, 2808, 2812, 2816, 2820, 2824, 2828, 2832, 2836, 2840, 2844, 2848, 2852, 2856, 2860, 2864, 2868, 2872, 2876, 2880, 2884, 2888, 2892, 2896, 2904, 2908, 2912, 2916, 2920, 2924, 2928, 2932, 2936, 2940, 2944, 2948, 2952, 2956, 2960, 2964, 2968, 2972, 2976, 2980, 2984, 2988, 2992, 2996]
var legalVal = "";
// Check if all leap years pass
for(var cur = 0; cur < leapYears.length; cur++){
	legalVal = leapYears[cur]+"/02/29"
	leapYear = new BestDate(legalVal);
	assert.equal(leapYear.result, leapYears[cur]+'-02-29');
}

// Check if all non leap years fail
for(var cur = 2000; cur < 2999; cur++){
	if(leapYears.indexOf(cur)=== -1){
		illegalVal = cur+'/02/29';
		leapYear = new BestDate(illegalVal);
		assert.equal(leapYear.result,illegalVal +illegal);
	}
}

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




console.log("All tests passed");

