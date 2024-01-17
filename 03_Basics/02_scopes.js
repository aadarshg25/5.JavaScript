let a =1;
const  b =111;
var c = 1111111111111111111; // <------------------------------------ if not declared same problem
if(true){
    let a = 10;
    const b =20;
    var c = 30;   // <---------------------------------------------
}

// console.log(a); //  error (a not defined)(if a is not defined above) //1
// console.log(b); //error ( b not defined)(if b is not defined above)  //111
// console.log(c); //30  // value change ho gyi  (agar var-var ka hain toh hi change hogi)
// Hence there is a problem with var and using "let" is a good proccess

//---------------------------------------------------------------------------------------------

function one(){
    const userName = "naruto";

    function two(){
        const website = "aniwatch";
        console.log(userName);
    }
    // console.log(website); // gives error

    two();
}
//one()  // error as website is in block two()(In this case two() is not even called as error ocuured)

//-------------------------------------------------------------------------------------------------------------
//Hoisting
// 1. when we are just defining function it can be called anywhere ex :
console.log(addOne(2));

function addOne(num){
    return num +1;
 }

// 2. But when we are defing in expression format it needs to be defined or expressed above it
//console.log(addTwo(2)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2; 
}

console.log(addTwo(2)); //4