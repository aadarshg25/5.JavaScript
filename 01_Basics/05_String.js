let name = "Naruto"
let jutsuCount = 1000;

// console.log("My name is " + name + " and I know a " + jutsuCount + " jutsu");

// we use  backticks(``) to format a sentence . It looks more formal know as STRING INTERPOLATION
console.log(`My name is ${name} and I know a ${jutsuCount} jutsu`);

const GameName = new String("Swardigo"); // Another way to declare a String 

// console.log(typeof name); //string
// console.log(typeof GameName);  //object

console.log(GameName)
console.log(GameName[0])
console.log(GameName.__proto__) // this refers to the prototypes
console.log(GameName.length)
console.log(GameName.toUpperCase()) // GameName original value is not changed
console.log(GameName.charAt(3))
console.log(GameName.indexOf('r'))
console.log(GameName.substring(0,4)) //(0,4]
console.log(GameName.slice(-5,-1)) // we can even use negative indexing in slice

// practical example 
let email = 'john@example.com'
let localPart = email.slice(0,email.indexOf('@'));

console.log(localPart); // john 

let StringNew = "    Ash     ";
let newString = StringNew.trim();
console.log(StringNew);
console.log(newString)

let url = "https://aadarsh.com/aadarsh%20gupta";
console.log(url.replace("%20","-"))

console.log(url.includes("%20"))

console.log(url.split("/"))
console.log(url.split('/',2))