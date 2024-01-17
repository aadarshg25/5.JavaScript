function sayHello(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}
// sayHello   // ( -> log : [Function: sayHello]   )--> refernece 
//sayHello();  // sayHello() --> execution
// H
// E
// L
// L
// O

// function addTwoNumber(num1,num2){
//     console.log(num1 + num2);
// }

//addTwoNumber(5,3); // 8

// const result = addTwoNumber(5,3);
// console.log("Result : ",result); //  here you can see we are not returning anything so it give undefined
// 6
// Result :  undefined

function addTwoNumber(num1,num2){
    return num1 + num2 ;
}

const result = addTwoNumber(5,3);
//console.log("Result : ",result);  //Result :  8

function loginUserMessage(userName = "Harry"){

    // if(userName === undefined){
    //     console.log("Enter a valid userName !");
    //     return; // cannot use break  here
    // }

    // if(!userName){                      // in Js we consider "","undefined" as false
    //     console.log("Enter a valid userName !");
    //     return; // cannot use break  here
    // }

    // we can also pass default value to avoid these situatins

    return `${userName} just logged in`
}
//console.log(loginUserMessage("hello")); //hello just logged in // loginUserMessage("hello") if you just write this nothing will be printed
console.log(loginUserMessage("Nobody")); // undefined just logged in