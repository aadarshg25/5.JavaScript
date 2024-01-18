// Ussage of "this" keyword
const user = {
    userName : "Aadarsh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName} , welcome to this website`); // "this" is used to define the current context
        //The code is giving an error because the variable userName is not defined within the scope of the welcomeMessage function.
        // In JavaScript, when you want to access properties of an object from within a method of that object,
        // you need to use the this keyword to refer to the object itself.

        console.log(this);
// { for first case and for sencond username changes to 'sam'
//   userName: 'Aadarsh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
    }
}
// user.welcomeMessage() // Aadarsh , welcome to this website
// user.userName = "sam";
// user.welcomeMessage() // sam , welcome to this website

//console.log(this);
//{} As there is nothing in the current context
// But in case when check in brwoser we get : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// This is because earlier javascript was only for brower so it has a global object windows but now we have standalone envir. like node

//For functions

function chai(){
    let chaiwala = "Hashira";
    //console.log(this);
// <ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Getter/Setter],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [Function: fetch],
//     crypto: [Getter]
//   }

    // if we try to access chaiwala through it (this)
    console.log(this.chaiwala); //undefined
}
//chai()

//From above 2 outputs we can see that "this" is not used and valid for funtions and current context 
//It has same result when denoted in expression form

//------------------------------------------------------------------------------------------
//Arrow function

const newChai = ()=>{
    let chaiwala = 22;
    console.log(this) // {}
    console.log(this.chaiwala); //undefined
}
// newChai() 

//In a regular function, the this keyword is dynamically scoped and determined by how the function is called.
//If the function is called as a method of an object, this refers to the object;
//if it's a standalone function, this refers to the global object (or undefined in strict mode).

//In contrast, arrow functions do not have their own this binding.
//Instead, they inherit the this value from the enclosing scope at the time the arrow function is defined.
//This behavior makes arrow functions particularly useful for functions defined within other functions
// or for callbacks where you want to capture the this value from the surrounding context.

const addTwo = (num1,num2)=>{
    return num1 + num2
}
// console.log(addTwo(1,2)) // 3

//Implicit return (One line code)(we assume that there is a return keyword)

//const addThree = (num1,num2,num3) => num1 + num2 + num3  // 6
//const addThree = (num1,num2,num3) => (num1 + num2 + num3) //6 // we can also wrap this in (num1 + num2 + num3) (not {} use return)
//supose we want to return an object like this 
const addThree = (num1,num2,num3) => ({userName : "Aadarsh"}) //{ userName: 'Aadarsh' }
//console.log(addThree(1,2,3));
