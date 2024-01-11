//JavaScript arrays are resizable and can contain a mix of different data types.
//JavaScript array-copy operations create shallow copies. //A shallow copy of an object is a copy whose properties share the same references 

const numbers = [1,2,3,4,5];

const heroes = [50554,"narto","jamesBond",,true,0o002]; //note should not conatin the number starting with zero
// console.log(heroes); //[ 50554, 'narto', 'jamesBond', <1 empty item>, true,2]


//Octal literals and octal escape sequences are deprecated and will throw a SyntaxError in strict mode.
//The standardized syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (0o or 0O).


//Another way to create an array
const arr = new Array(1,2,3,4,5);
// console.log(arr[2]);

//methods
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// console.log(arr.pop()) //5 
arr.push(6);
arr.push(9);

//console.log(arr.push(12)); //[1,2,3,4,6,9,12] it conatins 7 elemnts so the push when log it gives length of the updated array

arr.pop()
// console.log(arr); //[ 1, 2, 3, 4, 6, 9 ]

//Now if we want to add at beggning of the array
arr.unshift(10000);
//console.log(arr)  
//[
//     10000, 1, 2,
//         3, 4, 6,
//         9
//   ]

////Now if we want to remove from beggning of the array
arr.shift();
//console.log(arr) //[ 1, 2, 3, 4, 6, 9 ]

// console.log(arr.includes(5));  //false
// console.log(arr.indexOf(28));  //-1

//join binds all the array elements and convert them to string
const  newArr =  heroes.join();
// console.log(newArr); //50554,narto,jamesBond,,true,2
// console.log(typeof newArr); //string

//slice and splice (diff)

const myArr = [0,1,2,3,4,5];

console.log("original array : ",myArr); //original array :  [ 0, 1, 2, 3, 4, 5 ]
//slice
const myArr1 = myArr.slice(1,3); //diff1 : slice takes like [1,3)
console.log("Slice : ",myArr1); //Slice :  [ 1, 2 ]
console.log("B",myArr); //diff2 : original array dosent change :  B [ 0, 1, 2, 3, 4, 5 ]

//splice
const myArr2 = myArr.splice(1,3); //diff1 : slice takes like [1,3]
console.log("Splice : ",myArr2); // Splice :  [ 1, 2, 3 ]
console.log("C",myArr);  //diff2 : original array changes(the splice removes from original array) : C [ 0, 4, 5 ]  

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
