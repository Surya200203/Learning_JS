
const myNums = [1,2,3]

const myTotal= myNums.reduce((acc,currval) => acc+currval,0);
console.log(myTotal);

                //OR

const total = myNums.reduce(function (acc, currval) {
	return acc + currval;
}, 0);
console.log(total);


/* 
OUTPUT

6
*/


