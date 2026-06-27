//array is a set of values that are stored in a single variable. it can store multiple values of different data types. it is a special type of object. it is a collection of elements. it is a list of items. it is a collection of data. it is a collection of values. it is a collection of objects. it is a collection of arrays. it is a collection of functions. it is a collection of strings. it is a collection of numbers. it is a collection of booleans. it is a collection of nulls. it is a collection of undefineds. it is a collection of symbols. it is a collection of bigints.

//array is a special type of object. it is a collection of elements. it is a list of items. it is a collection of data. it is a collection of values. it is a collection of objects. it is a collection of arrays. it is a collection of functions. it is a collection of strings. it is a collection of numbers. it is a collection of booleans. it is a collection of nulls. it is a collection of undefineds. it is a collection of symbols. it is a collection of bigints.

//shallow copy mtlb ek array k ander jo bhi object hoga uska reference copy hoga na ki uska value copy hoga. isliye agar hum shallow copy k ander object k value ko change karte h to original array k ander bhi change ho jata h. isliye agar hum original array k ander object k value ko change nahi karna chahte to hume deep copy karna chahiye.
//  deep copy mtlb ek naya array create karna jisme original array k ander jo bhi object hoga uska naya object create hoga na ki uska reference copy hoga. isliye agar hum deep copy k ander object k value ko change karte h to original array k ander koi change nahi hota.

const myArray = [1, 2, 3, 4, 5]
const myArray2 = myArray //shallow copy
const myArray3 = [...myArray] //deep copy
myArray2[0] = 10
console.log(myArray);
myArray3[0] = 20
console.log(myArray3);

//from mdn
//java size are resizable
//arrays can hold any type of data
//arrays are zero-indexed
//arrays are iterable
//arrays are objects
//arrays are mutable

//arrays methods
const arr = [1, 2, 3, 3, 3, 4, 5]
arr.push(6) //add element at the end of the array
console.log(arr);
arr.pop() //remove element from the end of the array
console.log(arr);
arr.shift() //remove element from the start of the array
console.log(arr);
arr.unshift(1) //add element at the start of the array
console.log(arr);
arr.splice(2, 2) //remove element from the array at index 2
console.log(arr);
arr.splice(2, 0, 3, 3) //add element at index 2
console.log(arr);
arr.splice(2, 1, 5) //replace element at index 2
console.log(arr);
arr.slice(2, 4) //return a new array from index 2 to 4
console.log(arr);
console.log(arr.indexOf(3)); //return the index of the first occurrence of 3
console.log(arr.lastIndexOf(3)); //return the index of the last occurrence of 3
console.log(arr.includes(3)); //return true if 3 is present in the array
const myArR = arr.join("x")
console.log(myArR); //return a string by joining all the elements of the array
console.log(typeof myArR); //return a string by joining all the elements of the array
arr.reverse() //reverse the array
console.log(arr);



// slice, splice

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Sahil"))
console.log(Array.from("Sahil"))
console.log(Array.from({name: "chinu"})) // interesting question for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));