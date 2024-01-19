//Falsy values : There are the values that are assumed to be false

//false , 0 , -0 ,  BigInt : 0n , "" , null  , undefined , NaN 

// Rest all values are truthy values
//Truthy values ( some interesting)

//"0" , "false" , " " , [] , {} , function(){}
//ex :

let username = " "

if(username){
    console.log("Has a username");
}else{
    console.log("Naam nhi hain kya ? Moye , Moye");
}

// To check iff an array is empty

let arr = []

if(!arr.length){  // arr.length === 0
    console.log("Array is empty");
}else{
    console.log("Not Empty");
}

// To check if an object is empty

let obj = {};

if(Object.keys(obj).length ===0){
    console.log("Empty object");
}else{
    console.log("Not Empty");
}

//--------------------------------------------------------------------------------------

//Nullish Coalescing operator  (??) :  null  undefined

//let val1 =  5 ?? 10  // 5 // Takes first 
//let val2 =  null ?? 10 // 10 // if null take the second
//let val1 = undefined ?? 10 // 10  // // if undefined take the second
//let val1 =  null ?? 10 ?? 2000 //Takes first
//console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice =  100 ;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");