let age=19; //int
let name="John";//string
let height=5.9;//float
let isStudent=true;//boolean
const pi=3.14; //constant
var weight=70; //int

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table({age,name,height,isStudent,pi,weight});
// code readability should be high

//data types in js
// 1. Number
//ex:
let num1=10;
// 2. String
//ex:
let str1="Hello, World!";
// 3. Boolean
//ex:
let bool1=true;
// 4. Undefined
//ex:
let undef1=undefined;
// 5. Null
//ex:
let null1=null;
// 6. Object
//ex:
let obj1={name:"John", age:19};
// 7. Symbol
//ex:
let sym1=Symbol("key");
// 8. BigInt
//ex:
let bigInt1=BigInt("123456789012345678901234567890");
console.table({num1,str1,bool1,undef1,null1,obj1,sym1,bigInt1});
console.log(typeof num1); //number
console.log(typeof str1); //string
console.log(typeof bool1); //boolean
console.log(typeof undef1); //undefined
console.log(typeof null1); //object
console.log(typeof obj1); //object
console.log(typeof sym1); //symbol
console.log(typeof bigInt1); //bigint

//type conversion

// "33" => 33
// "33abc" => NaN

//convert number to string
let score1 = 33;
let valueInString = String(score1);
console.log(typeof valueInString);
console.log(valueInString);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " sahil"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // "12"
// console.log(1 + "2");// "12"
// console.log("1" + 2 + 2);// "122"
// console.log(1 + 2 + "2"); // "32"
//so it is better to use brackets to avoid confusion

// console.log( (3 + 4) * 5 % 3); // 2

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

//comparison operators
// ==, ===, !=, !==, >, <, >=, <=
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);