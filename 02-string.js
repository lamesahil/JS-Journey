const name = "chinu"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
 const nam = new String("chinu")
console.log(nam);
console.log(typeof nam);

//ALL PROPERTIES AND METHODS OF STRING
const myName = "chinu"
console.log(myName.length); // 5
console.log(myName.toUpperCase()); // CHINU
console.log(myName.toLowerCase()); // chinu
const myName2 = "   chinu   "
console.log(myName2.trim()); // chinu
console.log(myName.charAt(2)); // i
const myName3 = "sahil"
console.log(myName3.indexOf("h"));// 2
const myName4 = "sahil"
console.log(myName4.replace("sahil","chinu")); // chinu
const myName5 = "sahil"
console.log(myName5.substring(0, 3)); // sah
const myName6 = "sahil"
console.log(myName6.slice(0, 3)); // sah
const myName7 = "sahil"
console.log(myName7.split("")); // ["s", "a", "h", "i", "l"]
const myName8 = "sahil"
console.log(myName8.includes("s"));// true
const myName9 = "sahil"
console.log(myName9.startsWith("s"));// true
console.log(myName9.endsWith("l"));// true
console.log(myName9.repeat(3)); // sahilsahilsahil
console.log(myName9.charCodeAt(0)); // 115 it returns the unicode of the character at the specified index more info: https://www.w3schools.com/jsref/jsref_charcodeat.asp
console.log(myName9.concat(" chinu")); // sahil chinu
console.log(myName9.padStart(10, "0")); // 00000sahil it pads the string with the specified string until the string reaches the specified length more info: https://www.w3schools.com/jsref/jsref_padstart.asp
console.log(myName9.padEnd(10, "0")); // sahil00000 it pads the string with the specified string until the string reaches the specified length more info: https://www.w3schools.com/jsref/jsref_padend.asp
console.log(myName9.localeCompare("sahil")); // 0 it returns a number indicating whether the reference string comes before or after or is the same as the given string in sort order more info: https://www.w3schools.com/jsref/jsref_localecompare.asp
console.log(myName9.match(/s/)); // ["s", index: 0, input: "sahil", groups: undefined] it returns an array of matches for a string against a regular expression more info: https://www.w3schools.com/jsref/jsref_match.asp
console.log(myName9.search(/s/)); // 0 it returns the index of the first match for a string against a regular expression more info: https://www.w3schools.com/jsref/jsref_search.asp
console.log(myName9.replace(/s/, "chinu")); // chinuhil it replaces the first match for a string against a regular expression more info: https://www.w3schools.com/jsref/jsref_replace.asp

// we have disscussed all the properties and methods of string in this file. if you want to learn more about string you can visit this link: https://www.w3schools.com/jsref/jsref_obj_string.asp

const url = "https://sahil%20chinu.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))
const gameName = "Call-of-duty"
console.log(gameName.split('-'));