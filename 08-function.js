
function sayMyName(){
    console.log("s");
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("l");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("chinu"))
// console.log(loginUserMessage("chinu"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "chinu",
    age: 19
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    age: 28
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));