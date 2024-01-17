//There are two ways to declare an objects 

//Both methods of declaring objects produces same results and have no diff, except for singleton and non-singleton

//1.By constructor(singelton) //Object.create

//2.By object Literal(not singelton) 

const mySym = Symbol("Key1") // for symbol as key in an object

const JsUser = {
    name : "Aadarsh", // here the name behind the scene is stored as "name"
    "full name" : "Aadarsh Gupta",  // if we directly take key with "" we need to use objectName["keyName"]
    age : 20 ,
    email : "aadarshg2562003@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Tuesday"],
    [mySym] : "myKey1"  // this is the correct syntax if you do like mySym : "myKey1" it will not give any error but its not the way we difine a key as a symbol dtatype
}
//-----------------------------------------------------------------------------------------------------
//ways to access the object  elemets

//console.log(JsUser.email);     //  aadarshg2562003@gmail.com
//console.log(JsUser.full name);  error
// the problem with above syntax arises in case of full name if it has been  full_name then it will work by usual method

//console.log(JsUser["email"]);  //  aadarshg2562003@gmail.com
//console.log(JsUser["full name"]);  // Aadarsh Gupta

//for symbol as key
//console.log(JsUser[mySym]); // we cannot use dot notaion here

// you the check the diff by logging the objects in both cases
//console.log(JsUser);
// {
//     name: 'Aadarsh',
//     'full name': 'Aadarsh Gupta',
//     age: 20,
//     email: 'aadarshg2562003@gmail.com',
//     isLoggedIn: true,
//     lastLoginDays: [ 'Monday', 'Tuesday' ],
//     mySym: 'myKey1'
//   }

// {
//     name: 'Aadarsh',
//     'full name': 'Aadarsh Gupta',
//     age: 20,
//     email: 'aadarshg2562003@gmail.com',
//     isLoggedIn: true,
//     lastLoginDays: [ 'Monday', 'Tuesday' ],
//     [Symbol(Key1)]: 'myKey1'
// }
//-------------------------------------------------------------------------------------------
//change elements of objects
JsUser.name = "Freezed Here";

//we can add new elements  in the same manner
JsUser.addNewElement = "OK";

//Now if you want that no should change the elemets of your object you can freeze the object
//Object.freeze(JsUser);  // for next part comment hain is part me nhi uncommnt kar do (Now)

JsUser.name = "NObody Freezed Here";
//console.log(JsUser);
// {
//     name: 'Freezed Here',   <--------------------------
//     'full name': 'Aadarsh Gupta',
//     age: 20,
//     email: 'aadarshg2562003@gmail.com',
//     isLoggedIn: true,
//     lastLoginDays: [ 'Monday', 'Tuesday' ],
//     addNewElement: 'OK',    <--------------------
//     [Symbol(Key1)]: 'myKey1'
// }

//Adding functions in objects as elements
JsUser.greeting = function(){
    console.log("Hi JS Users");
}
 
//console.log(JsUser.greeting);   // [Function (anonymous)]  // fun. ka reference aya hain
//console.log(JsUser.greeting()); 
// Hi JS Users
// undefined //we will let you later

JsUser.greetingTwo = function(){
    console.log(`Hi JS Users ${this.name}`);  //this["full name"]
}
//console.log(JsUser.greetingTwo());
//Hi JS Users NObody Freezed Here
//undefined