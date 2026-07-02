// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon imp.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('chinu')