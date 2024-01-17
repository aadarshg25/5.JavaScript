//Now if we want to merge two arrays 

const myArr1 = [1,2,3,4]
const myArr2 = [10,11,12,13]

//myArr1.push(myArr2);
//Here as we know in js arrays can take differnet values so it takes the new array as a element
//console.log(myArr1); //[ 1, 2, 3, 4, [ 10, 11, 12, 13 ] ]


//concat : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
myArr1.concat(myArr2);
//console.log(myArr1); // [ 1, 2, 3, 4 ] //read the above note

const combinedArray1_2 = myArr1.concat(myArr2);
//console.log(combinedArray1_2);
//[
    1,  2,  3,  4,
   10, 11, 12, 13
// ]

//For most instances we use spread operator

const combinedArr1_2 = [...myArr1,...myArr2];
//console.log(combinedArr1_2);
// [
//     1,  2,  3,  4,
//    10, 11, 12, 13
// ]

//In both techn. if array elements are same it will add them as it is ex: [1,2,3,1,2,3]

//Now in some cases we are given a confusing array(ajjeb)
const myArr = [1,2,[3,6,5,8],[1,[2,[3]]],2,5,8,7]
const usable_myArr = myArr.flat(Infinity); 
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//you can specify a number or Infinity for all depths 
//console.log(usable_myArr);
// [
//     1, 2, 3, 6, 5, 8,
//     1, 2, 3, 2, 5, 8,
//     7
//   ]

//Now we want to check if the input we are getting is an array or not
//console.log(Array.isArray("I am cool"));

//to convert the input into array we use .from
//console.log(Array.from("I am cool")); 
// [
//     'I', ' ', 'a',
//     'm', ' ', 'c',
//     'o', 'o', 'l'
// ]

//now we can mutiple things in from for ex : objects
//console.log(Array.from({name : "tony stark"}));
//Here it return an empty array cause we dosent define on which basis we divide the array as keys or as values 

//suppose we want to make an arrays from some var,objects ,arrays,etc we use .of()
let s1 = [1000,2200];
let s2 = {
    name : "dadawda"
};
let s3 = 250;
let s4 = true;
//console.log(Array.of(s1,s2,s3,s4));
// [ [ 1000, 2200 ], { name: 'dadawda' }, 250, true ]