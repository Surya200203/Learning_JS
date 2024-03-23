
const myNum = [1,2,3,4,5,6,7,8,9,10];

const numbers = myNum.filter( (num) => num > 4);
console.log(numbers);

                //OR

const n = myNum.filter( function (num){
    return num >4;
})

/*
 OUTPUT
 
 [ 5, 6, 7, 8, 9, 10 ]
 */

