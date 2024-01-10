const score = 400
// console.log(score); //400

const balance = new Number(500);
// console.log(balance); //[Number: 500]

// console.log(balance.toString());  //500
// console.log(balance.toString().length); // this can be used to find the length of the  number we are getting //3

//suppose we want 2 number after decimal then we need to use toFixed(Number n)
// console.log(balance.toFixed(2)); //500.00

//Now if want precision before decimal then we use toPrecision(Number n)
const otherNumber = 123.89912
// console.log(otherNumber.toPrecision(4)); //123.9

//Now if there are too many zeroes then we need to use some good representation to see clearly whats written
const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //US Standards //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //Indian Standards //10,00,000

//--------------------------------- MATHS --------------------------------------------------------------------

// console.log(Math);  // Object [Math] {}
// console.log(Math.abs(-5522));  // 5522
// console.log(Math.round(4.5));  //5
// console.log(Math.ceil(4.1));    //5
// console.log(Math.floor(4.9));   //4
// console.log(Math.min(1,2,3,4,5,6));
// console.log(Math.max(...[2,3,5,8])); // we need to use spread operator(...) for array 

//Random
console.log(Math.random()); //It generates value b/w 0-1
//to get value within 0-9
console.log(Math.floor(Math.random()*10));
//to get value within 1-10 we add the minimum value i.e, 1
console.log(Math.floor((Math.random()*10)+1));

//To get values withing a range we use like
let min =10;
let max = 20;

console.log((Math.floor(Math.random() * (max-min+1))) + min)
