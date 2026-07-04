let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myDC = ['flash', "batman", "superman"]

let arr = 0
while (arr < myDC.length) {
    //console.log(`Value is ${myDC[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);



// for of

// ["", "", ""] //array
// [{}, {}, {}] //array of objects

//const arr = [1, 2, 3, 4, 5]


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('IN', "India") //in map repeating keys are not allowed, it will override the previous value with the new value also it follows insertion order, so the last value will be considered for the key.


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA',
    game4: 'FIFA'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } // TypeError: myObject is not iterable

for (const key in myObject) {
    // console.log(key, ':-', myObject[key]);
    console.log(key, ':-', myObject[key]);
}

// for in loop is used to iterate over the properties of an object. It returns the keys of the object. also can be used to iterate over the properties of an array. It returns the index of the array.

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
//here in map we cannot use for in loop because map is not an object, it is a collection of key-value pairs. so we can use for of loop to iterate over the map.

//in this file we have seen the different types of loops in javascript. we have seen for loop, while loop, do while loop, for of loop, for in loop. we have also seen how to use break and continue statements in loops.