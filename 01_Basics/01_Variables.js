const acccountId = 12345
let email = "harrypotter@new.com"
var acccountPassword = "12346"
acccountCity = "Jaipur"
let acccountState;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId) // As both are unique 
// acccountId = 216655 //Not Allowed

/*
Prefer not to use var 
because of block scope and functional scope
*/

/*var:

Function-Scoped (var): If a variable is declared with var inside a function, it is confined to that function's scope and cannot be accessed outside of it.
If var is declared outside of any function, it becomes globally scoped and can be accessed from anywhere in the code.

var is function-scoped: It is accessible throughout the function in which it is declared, even outside a block {}.
let is block-scoped: It is only accessible inside the block {} where it is declared.

let:

Block-scoped: A let variable is only accessible within the block, statement, or expression in which it is declared.
If a let variable is declared inside a block, it is not accessible outside that block

2. Hoisting:
var:

Variables declared with var are hoisted to the top of their scope but are initialized with undefined.
This means you can reference a var variable before its declaration, but it will be undefined until the line where it is assigned.
console.log(a); // undefined (hoisting)
var a = 5;
console.log(a); // 5
let:

Variables declared with let are also hoisted to the top of their block, but they are not initialized.
Accessing a let variable before its declaration results in a ReferenceError. This is due to the "temporal dead zone," 
which is the time between entering the scope and the actual declaration where the variable cannot be accessed.

console.log(b); // ReferenceError (temporal dead zone)
let b = 5;
console.log(b); // 5
3. Redeclaration:
var:

You can redeclare a var variable within the same scope without any errors.
var c = 10;
var c = 20;
console.log(c); // 20

let:

Redeclaring a let variable within the same scope will result in a SyntaxError.

let d = 10;
let d = 20; // SyntaxError: Identifier 'd' has already been declared
4. Global Object Property:
var:

If you declare a variable with var in the global scope, it becomes a property of the global object (window in browsers).

var e = 30;
console.log(window.e); // 30
let:

A variable declared with let in the global scope does not create a property on the global object.
javascript
Copy code
let f = 40;
console.log(window.f); // undefined

*/

console.log(acccountId);
console.table([acccountId,email,acccountPassword,acccountCity,acccountState])
