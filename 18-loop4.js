//const myNums = [1, 2, 3, 4];

//const result = myNums.map( (num) => {
  //  return num + 10;
//} );

//console.log(result);

//const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//const newNums = myNumers
//                .map((num) => num * 10 )
//                .map( (num) => num + 1)
//                .filter( (num) => num >= 40)

//console.log(newNums);

//.map() method is used to create a new array with the results of calling a provided function on every element in the calling array. It does not change the original array. It returns a new array with the results of calling the provided function on every element in the calling array.

//reduce method is used to reduce the array to a single value. It does not change the original array. It returns a single value that is the result of calling the provided function on every element in the calling array.

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const myShoppingCart = [
    {
        itemName: "laptop",
        price: 100000,
    },
    {
        itemName: "mobile",
        price: 50000,
    },
    {
        itemName: "headphones",
        price: 2000,
    },
];

const cartTotal = myShoppingCart.reduce( (acc, item) => acc + item.price, 0 );

console.log(cartTotal);


//in this file we learned about the map method and the reduce method. The map method is used to create a new array with the results of calling a provided function on every element in the calling array. It does not change the original array. It returns a new array with the results of calling the provided function on every element in the calling array. The reduce method is used to reduce the array to a single value. It does not change the original array. It returns a single value that is the result of calling the provided function on every element in the calling array.
