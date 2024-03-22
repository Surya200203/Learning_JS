

function sayMyName(){
    console.log("Sanket");
    console.log("Krishnat");
    console.log("Suryavanshi");
}

sayMyName()  // execution of function
sayMyName    // reference of function

/*
OUTPUT

Sanket
Krishnat
Suryavanshi

*/

function addTwoNumbers(num1,num2){ // num1 nad num2 are parameters
    return num1+num2;
}
console.log(addTwoNumbers(2,3)); // 2 and 3 are arguments

/* OUTPUT :-  5 */

// Rest Operator --> uses when we dont know size of arguments passed to function

function calculateCartPrice(...items){
    return items
}

console.log(calculateCartPrice(200,300,400,500));  // gives an array

/* OUTPUT

[ 200, 300, 400, 500 ] 
*/

//Object handling with function

const product = {
    name : "book",
    price:199
}

function handleObject(anyObject){
    console.log(`Product name is ${anyObject.name} and price is ${anyObject.price}`);
}
handleObject(product)


/* 
OUTPUT

Product name is book and price is 199

*/
