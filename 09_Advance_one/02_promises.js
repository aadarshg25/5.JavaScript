// const promiseOne = new Promise(function(resolve,reject){
//     //Do Async task
//     //DB calls , Cryptography , network
//     setTimeout(function(){
//         console.log("Async  task  1 is completed"); // 1 line
//         resolve(); // for conneting with then we need to call this  // 2 line
//     },3000)
// });
// If we mention 2 line above first it will show the same result as first Async then consumed 

// promiseOne.then(function(){ // .then is directly connected with resolve 
//     console.log("Promise consumed");
// });
//-------------------------------------------------------------------------------------------------------

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 resolved");
// })

//-------------------------------------------------------------------------------------------------------------------

// So whatever the parameter we pass in resolve() it can be used in .then() ex:

// const promiseThree = new Promise(function (resolve , reject){
//     let UserData = {
//         user1 : {
//             userName : "Aadarsh",
//             email : "Aadarsh@it.com"
//         },
//         user2 : {
//             userName : "Yash",
//             email : "Yah@it.com"
//         },
//         user3 : {
//             userName : "Ash",
//             email : "Ash@it.com"
//         }   
//     }
//     setTimeout(function(){
//         resolve(UserData);
//     },1000)
// })

// promiseThree.then(function(data){
//     console.log(data);  // see here
// })

//----------------------------------------------------------------------------------------------------------
// chaining can be done for ex :
// const promiseFour = new Promise(function (resolve,reject){
//     let UserData = {
//                 user1 : {
//                     userName : "Aadarsh",
//                     email : "Aadarsh@it.com"
//                 },
//                 user2 : {
//                     userName : "Yash",
//                     email : "Yah@it.com"
//                 },
//                 user3 : {
//                     userName : "Ash",
//                     email : "Ash@it.com"
//                 }   
//             }
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve(UserData);
//         }else{
//             reject("Something went wrong ");
//         }
//     },1000)
// }) 

// promiseFour.then(function(data){
//     // console.log(data.user1);
//     return data.user1;  // this  return gets as parameter in the next then chain
// }).then(function(nextData){
//     console.log(nextData.userName);
// }).catch(function(error){  // for rejection we use catch and we can also the error from reject like we did in reslove
//     console.log(error + "Rejection Resolved");
// }).finally(function(){console.log("I  am always Here");}) // finally always runs wether its resolve or reject

//-----------------------------------------------------------------------------------------------------------------
//Aysnc and Await function
// const promiseFive  = new Promise(function(reslove,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             reslove({
//                 userName : "Ash",
//                 email : "Ash@it.com"
//             } );
//         }else{
//             reject("ERROR : Js went wrong ")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
    
// }
//consumePromiseFive();
// Async | Await works just fine with no error but in case of error it does not handle it gracefully

//------------------------------------------------------------------------------------------------------------------
//lets take a real life scenerio

// async function getUserDetails(){
//     try {
//     const response = await fetch("https://api.github.com/users/aadarshg25");
//     // console.log(response);  we get the response from fetch as a string
//     // but convertig it into json  also takes time so we need to also await it
//     const data = await response.json();
//     console.log(data);
//     } catch (error) {
//        console.log(error); 
//     }
// }

// // getUserDetails();

// using .then
fetch("https://api.github.com/users/aadarshg25")
.then(function(response){
    return  response.json();
})
.then(function(jsonData){
    console.log(jsonData);
})
.catch(function(error){
    console.log(error);
})