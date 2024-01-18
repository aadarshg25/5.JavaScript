//Immediately Invoked function Expression
// we do this for immediate execution of function and to prevent our function from polltion of global scope

// function chai(){   // NORMAL FORM
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){ // Named iife
    console.log(`DB connected`);
})(); //<------------------- if not mention the ";" here then it will error for " next iife only " cause it dosent know when to stop

(function Nextchai(){
    console.log(`DB TwoConnected`);
})();

//UnNamed iife with paramets
((username)=>{
    console.log(`hello ${username}`);
})("Aadarsh");