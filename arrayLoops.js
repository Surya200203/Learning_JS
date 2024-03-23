// for-of loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
	console.log(num);
}
/*
OUTPUT

1
2
3
4
5
*/

const greetings = 'Hello';
for (const greet of greetings) {
	console.log(greet);
}
/*
OUTPUT

H
e
l
l
o
*/

// Maps  (Maps has key-value pair it remeber's the order in which it is inserted.)

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('Fr', 'France');
console.log(map);
/*
OUTPUT

Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const key of map) {
	console.log(key);
}
/*
OUTPUT

[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key, value] of map) {
	//array destructureing is done
	console.log(key, ' :- ', value);
}

/*
OUTPUT

IN  :-  India
USA  :-  United States of America
Fr  :-  France
*/

// for-in loop

const programming = ['js', 'python', 'java', 'cpp', 'ruby'];

for (const val in programming) {
	console.log(val);
}
/*
OUTPUT

0
1
2
3
4
*/

for (const val in programming) {
    console.log(programming[val]);
}
/*
OUTPUT

js
python
java
cpp
ruby

*/

// for-each

const coding = ["js","cpp","ruby","python","java"];

//for-each using noraml function
coding.forEach(function (item) { // callback function
    console.log(item);
})
/*
OUTPUT

js
cpp
ruby
python
java
*/

//for-each using arrow function
coding.forEach((item) => console.log(item));

/*
OUTPUT

js
cpp
ruby
python
java
*/

//giving more parameters to forEach
coding.forEach( (item,index,arr) => console.log(item,index,arr));

/*
OUTPUT

js 0 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
cpp 1 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
ruby 2 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
python 3 [ 'js', 'cpp', 'ruby', 'python', 'java' ]
java 4 [ 'js', 'cpp', 'ruby', 'python', 'java' ]

*/

const values = coding.forEach( (item) => console.log(item));
console.log(values);
/*
OUTPUT

undefined
*/
