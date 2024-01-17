const tinderUser = {};

tinderUser.id = "1234abc";
tinderUser.name = "Ash";
tinderUser.isLoggedIn = false ;

//console.log(tinderUser); //{ id: '1234abc', name: 'Ash', isLoggedIn: false }

//Some useful method from Object class are
//console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ] // It return as an "Array" of keys

//console.log(Object.values(tinderUser)); // [ '1234abc', 'Ash', false ]  // It return as an "Array" of Values

//console.log(Object.entries(tinderUser)); //[ [ 'id', '1234abc' ], [ 'name', 'Ash' ], [ 'isLoggedIn', false ] ]
// It return as an "Array" of  Array of key value 

//suppose we want to check if there exist the property or key that we want
//console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

const regularUser = {
    email : "sampleMail@gmail.com",
    fullName : {
        userName : {
            firstName : "Aadarsh",
            lastName : "Gupta"
        }
    }
}

// console.log(regularUser.fullName.userName.lastName); //Gupta // There can be cases where fullname does not exist in that we use ?(discussed later)

//Merger of two objects // if merging of objects values are modified if keys are same

const obj1 = {"a" : 1 , "b" :2}
const obj2 = {"c" : 3 , "d" :4}

//const obj3 = {obj1 , obj2};
//console.log(obj3); //{ obj1: { a: 1, b: 2 }, obj2: { c: 3, d: 4 } } //same problem as array it consider obj as elements

//1.using assign
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
//It returns the modified target object. //const returnedTarget = Object.assign(target, source);
const obj3 = Object.assign({},obj1,obj2) 
//console.log(obj3);   // { a: 1, b: 2, c: 3, d: 4 }
//console.log(obj1);   // { a: 1, b: 2 }

const obj4 = Object.assign(obj1,obj2) 
//this will produce the same ouput here the diff is just that the target is obj1 now the content is getting stored in obj1
//console.log(obj4);   // { a: 1, b: 2, c: 3, d: 4 }
//console.log(obj1);   // { a: 1, b: 2, c: 3, d: 4 }  <-------------


//2. using spread operator
const obj5 = {...obj1,...obj2}
//console.log(obj5); //{ a: 1, b: 2, c: 3, d: 4 }