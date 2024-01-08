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
console.log(acccountId);
console.table([acccountId,email,acccountPassword,acccountCity,acccountState])
