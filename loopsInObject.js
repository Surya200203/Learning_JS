
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb: 'ruby',
    py : 'python'
}

for (const value in myObject) {
    console.log(value);
}
/* 
OUTPUT

js
cpp
rb 
py
*/

for (const val in myObject) {
    console.log(myObject[val]);
}

/* 
OUTPUT

javascript
C++
ruby
python
*/