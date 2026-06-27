const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); //output: [Number: 100]

// console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 100.0 it returns a string representing the number in fixed-point notation more info: https://www.mdn.io/docs/number/tofixed

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // 123.9 it returns a string representing the number to the specified precision more info: https://www.mdn.io/docs/number/toprecision

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// 10,00,000 it returns a string with a language sensitive representation of this number more info: https://www.mdn.io/docs/number/tolocalestring

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // it is a built-in object that has properties and methods for mathematical constants and functions more info: https://www.w3schools.com/jsref/jsref_obj_math.asp
// console.log(Math.abs(-4)); // 4 it returns the absolute value of a number more info: https://www.w3schools.com/jsref/jsref_abs.asp
// console.log(Math.round(4.6)); // 5 it returns the value of a number rounded to the nearest integer more info: https://www.w3schools.com/jsref/jsref_round.asp
// console.log(Math.ceil(4.2)); // 5 it returns the value of a number rounded up to the nearest integer more info: https://www.w3schools.com/jsref/jsref_ceil.asp
// console.log(Math.floor(4.9)); // 4 it returns the value of a number rounded down to the nearest integer more info: https://www.w3schools.com/jsref/jsref_floor.asp
// console.log(Math.min(4, 3, 6, 8)); // 3 it returns the lowest value of a list of numbers more info: https://www.w3schools.com/jsref/jsref_min.asp
// console.log(Math.max(4, 3, 6, 8)); // 8 it returns the highest value of a list of numbers more info: https://www.w3schools.com/jsref/jsref_max.asp

/*console.log(Math.random());// it returns a random number between 0 (inclusive), and 1 (exclusive) more info: https://www.w3schools.com/jsref/jsref_random.asp
console.log((Math.random()*10) + 1);// it returns a random number between 1 (inclusive), and 10 (exclusive) more info: https://www.w3schools.com/jsref/jsref_random.asp
console.log(Math.floor(Math.random()*10) + 1);// it returns a random integer between 1 (inclusive), and 10 (inclusive) more info: https://www.w3schools.com/jsref/jsref_random.asp
*/

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)