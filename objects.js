
// Objects

// Object literals

const JsUser ={};   // Empty Object

const employee = {
    firstName : "Sanket",
    age : 22,
    gender : "male"
}

console.log(employee);
/* OUTPUT :- { firstName: 'Sanket', age: 22, gender: 'male' } */

// using Symbol in object

const mySum = Symbol();
const emp = {
    firstname : "Sumit",
    age : 22,
    [mySum] : "mykey1"
}
console.log(emp[mySum]);
/* OUTPUT :- mykey1 */


// Singleton

const instaUser = new Object();

instaUser.id = "123abc";
instaUser.name = "Sahil";
instaUser.isLoggedIn = true;
console.log(instaUser);

/* OUTPUT :- { id: '123abc', name: 'Sahil', isLoggedIn: true } */

const obj3 = Object.assign({},employee,instaUser,emp);
console.log(obj3);

/*
OUTPUT

{
  firstName: 'Sanket',
  age: 22,
  gender: 'male',
  id: '123abc',
  name: 'Sahil',
  isLoggedIn: true,
  firstname: 'Sumit',
  [Symbol()]: 'mykey1'
}

*/

// DE-STRUCTURING OF OBJECTS

const course = {
    courseName : "JS",
    price : 999,
    courseInstructor : "Sam"
}

const {courseInstructor} = course; // de-structuring of object
console.log(courseInstructor);

/*
OUTPUT

Sam

*/