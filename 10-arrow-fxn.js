const user = {
    username: "sahil",
    age: 19,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "apple"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sahil"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "sahil"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sahil"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const name = () => ({username: "chinu"})


console.log(name())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//basically this arrow fxn mei nhi hota use bs object mei aur uske and rjo function rehte usme use hota h.