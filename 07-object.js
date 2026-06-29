// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Chinu",
    "full name": "Sahil Tiwari",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "chinu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "chinu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "chinu@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
c//onsole.log(Object.entries(tinderUser));
const obj6= Object.entries(tinderUser);
console.log(obj6.flat(Infinity));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const football = {
    position: "RB",
    foot: "left",
    player: "chinu"
}

// football.name

//deconstrutor

const {player: name} = football

// console.log(player);
console.log(name);

//json

// {
//     "position": "RB",
//    "foot": "left",
//    "player": "chinu"
// }

[
    {},
    {},
    {}
]
//what is api? 