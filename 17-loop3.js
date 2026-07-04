//using for each to iterate over an array of objects and access the properties of each object.


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )



// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
//forEach does not return anything, it just iterates over the array and executes the callback function for each element. It does not return a new array like map does. So, the values variable will be undefined.

// console.log(values);

//filter method is used to create a new array with all elements that pass the test implemented by the provided function. It does not change the original array. It returns a new array with the elements that pass the test.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

//map method is used to create a new array with the results of calling a provided function on every element in the calling array. It does not change the original array. It returns a new array with the results of calling the provided function on every element in the calling array.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  userBooks = books.filter( (bk) => bk.publish >= 1989 && bk.genre === "Science")
  console.log(userBooks);

  //in this example, we are using the filter method to create a new array of books that have a genre of "History" and were published after 1995. The filter method takes a callback function that is called for each element in the array. The callback function should return true or false. If it returns true, the element is included in the new array. If it returns false, the element is not included in the new array.



  //in this file we learned about the forEach method, the filter method, and the map method. We also learned about the difference between forEach and map. The forEach method does not return anything, it just iterates over the array and executes the callback function for each element. The map method returns a new array with the results of calling a provided function on every element in the calling array. The filter method returns a new array with all elements that pass the test implemented by the provided function. It does not change the original array.