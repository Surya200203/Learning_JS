// IIFE ( Immediately Invoked Function Expression)
// not need to call these function they got invoked as program runs.

// Used to reduce the problem created by global scope

// Synatx :-  ()()  --> First parenthesis defines function defination and second defines function call 


// named IIFE
(function connection(){
    console.log(`DB Connected`);
})();

// Simple IIFE
((name) => {
    console.log(`Welcome, ${name}`);
})("Sanket");

/*
OUTPUT 

DB Connected
Welcome, Sanket

*/