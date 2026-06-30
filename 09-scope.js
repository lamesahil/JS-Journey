//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


//var vala scope {} k baahra b ata h

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "chinu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "chinu"
    if (username === "chinu") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//hoisting nrrml function pehle ho jata h par if expresison mei rhega function to pehle nhi rkh skte not initialize vala error ayega

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}