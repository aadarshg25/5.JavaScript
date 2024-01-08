let score = undefined

//console.log(typeof(score));

let valueOfScore = Number(score);
//console.log(valueOfScore); //NaN
//console.log(typeof valueOfScore); // Number

//NaN(Not A Number) => type : Number
// "33" => 33
//"33a" = > NaN
// true => 1 ; false = > 0
// null = > 0
// undefined =>NaN

let isLoggedIn = "Aadarsh" ;
let valueOfIsLoggedIn = Boolean(isLoggedIn);
console.log(valueOfIsLoggedIn);

// 1 => true | 0 => false | number other than zero => true
//"" => false | "abs" => true

let someNumber = 23;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);
console.log("---------------------OPERATIONS---------------------------");
// ******************* OPERATIONS **************************************************

let value = 3 ;
let negValue = - value;
// console.log(negValue); //-3

//console.log(2**3); // 8 --> 2 to power 3 (**)

let  str1 = "hello";
let str2 = " Aadarsh";
let str = str1 + str2;
// any operator except  + will give NaN
// console.log(str); // hello Aadarsh

// console.log(1 + "2"); //12
// console.log("1" + 2); //12
// console.log("1" + 2 + 2 ); //122
// console.log(1 + 2 + "2") //32

// console.log(+true) //1 but true+ gives error
// console.log(+false)

// console.log(+""); //0
