//Arrow Function

// Syntax :- () => {};

// this keyword (refers to current context)

const user = {
	username: 'Sanket',
	age: 22,
	welcomeMessage: function () {
		console.log(`${this.username}, welcome to office`); 
		console.log(this); 
	},
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();
console.log(this);


/*
OUTPUT

Sanket, welcome to office
{
  username: 'Sanket',
  age: 22,
  welcomeMessage: [Function: welcomeMessage]
}
Sam, welcome to office
{
  username: 'Sam',
  age: 22,
  welcomeMessage: [Function: welcomeMessage]
}
{}
*/


const addTwo = (num1,num2) => (num1+num2);
console.log(addTwo(3,4)); // 7

