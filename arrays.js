// Arrays

const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(1, 2, 3, 4, 'sanket'); // mixed datatypes are allowded in JS

console.log(myArr);
console.log(myArr2);

/* 
OUTPUT

[ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 'sanket' ]

*/

const marvel_heros = ['Thor', 'Ironman', 'Spiderman'];
const dc_heros = ['Superman', 'Flash', 'Batman'];

const fruits = ['apple', 'orange', 'grapes'];
const veg = ['brinjal', 'spinach'];

marvel_heros.push(dc_heros); // push method
console.log(marvel_heros);

fruits.concat(veg); // concat method
console.log(fruits);

/*
OUTPUT

[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
[ 'apple', 'orange', 'grapes' ]

*/

// SPREAD Operator

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

/*

OUTPUT

[
  'Thor',
  'Ironman',
  'Spiderman',
  [ 'Superman', 'Flash', 'Batman' ],
  'Superman',
  'Flash',
  'Batman'
]
*/

console.log(Array.from({name :"hitesh"})); // []
console.log(Array.from("Sanket")); // [ 'S', 'a', 'n', 'k', 'e', 't' ]
console.log(Array.isArray("Sanket")); //false
console.log(Array.isArray(marvel_heros)); //true