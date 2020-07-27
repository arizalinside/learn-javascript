// MULTI LINE STRING ==============================================================================
// BEFORE
console.log("string text line 1\n" + " string text line 2");
// "string text line 1 string text line 2"

// AFTER
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"

// EXPRESSION INTERPOLATION ================================================================
// BEFORE
let a = 5;
let b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."

// AFTER
let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
