// for of loop

let arr = [1,2,"shaktiman","Naruto",true]

// for (const iterator of object // here objects means kis me loop lagana hain) {  // Syntax

// } //In this loop u dont have to give any initaliztion,decla,or even incrementals it does it on its own

for(const value of arr){
    //console.log(value);
}
// 1
// 2
// shaktiman
// Naruto
// true

// with strings
const greetings = "Hello World !"
for(const greet of greetings){
    //console.log(greet);
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d
 
// !
}

//------------------------------------------------------------------------------------------------
// Map : The Map object holds key-value pairs and remembers the original insertion order of the keys

const myMap = new Map();
myMap.set("locker 1", "key 1")
myMap.set("locker 2", "key 2")
myMap.set("locker 3", "key 3")

//console.log(myMap);
// //Map(3) {
//     'locker 1' => 'key 1',
//     'locker 2' => 'key 2',
//     'locker 3' => 'key 3'
//   }

//Now lets try to apply for of loop on map
for (const key of myMap) {
    //console.log(key);
    // [ 'locker 1', 'key 1' ] // we get a array of key vlaue pair
    // [ 'locker 2', 'key 2' ]
    // [ 'locker 3', 'key 3' ]
} 
for (const [key,value] of myMap) {
    //console.log(`${key} : ${value}`);
    // locker 1 : key 1 // here we are using arry destructuringg to achie key value seprately
    // locker 2 : key 2
    // locker 3 : key 3
} 

//Now lets try does the same method work for objects tooo

let myObject = {
    "game 1" : "bgmi",
    "game 2" : "velorant"
}

for(const [game] of myObject){
    // console.log(game); // error : myObject is not iterable
} 
// we cannot iteate objects through for of loop