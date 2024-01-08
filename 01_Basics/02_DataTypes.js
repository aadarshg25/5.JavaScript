//On the basis of how the data is stored and how it is acceesed the data is divided into two category
// 1.Primitive  2.Non Primitive

"use strict";// treats all js code as newer version

// alert("hello") // we are using node js not browser


// 1 . Primitive DataTypes ( these are : call by value (copy jati hain usma changes hota hain))
let number = 122224;
let name = "aadarsh"
let isLogged = true;

// number => range 2 to power 53
// bigint => for big integers
//string  => ""
//boolean => true/false
//null = > standalone value (empty value)
//undefined => abhi value assign nhi hui hain
//symbol = > uniquen

// 2.Non - Primitive Datatypes or Referenece DataTypes ( Call by reference)  || return type is object

//Array , Object , Functions

console.log(typeof null); // object
console.log(typeof undefined);// undefined

const array = ["aadarsh" ,"Ash" , "Itachi"];
const obj = {
    name : "Takemichi",
    age : 29
}
const fun = function(){
    console.log("Hello  World");
}
fun();

console.log(typeof obj);
console.log(typeof fun);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function

console.log("-------------------------------- Memory -----------------------------------")
//-----------------------------------  Memory ------------------------------------
// Stack (Premitive)  ,  Heap (Non - Premetive)
 
// For stack :
let MyName = "Aadarsh" ;
let AnotherName = MyName ; // it gets a copy of the MyName in the stack
AnotherName = "Hero" ;

console.log(MyName);
console.log(AnotherName);

//for Heap 
 let userI = {
    name : "Hello",
    age : 20
 }

 let userII =userI; // It gets a reference of the object userI(Which is stored in heap although the name is stored in stack the cotent is in heap)
 userII.name = "Chalo"

 console.log(userI);
 console.log(userII)