# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button"); //Nodelist
const body = document.querySelector("body");
console.log(buttons)

buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target); // this tells us which button is clicked
    
    //Now we are able to check whcih button is clicked we can easily get its attri
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id;
    }
    else if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }
  })
})
```

## project 2


```javascript
  // we need to take the whole form cause the action we want to perform is submit
const form = document.querySelector("form");

//This usecasee will give us an empty value as when the page opens the value are filled
//const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e){
  e.preventDefault(); // This cancels the dafault action of the event

  // document.querySelector("#weight").value // this will give us a string value
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // we need to write some checks to define a valid output
  if(height === "" || height <0 || isNaN(height)){
    results.innerHTML = `Please Enter a Valid height (${height})`
  }
  else if(weight === "" || weight <0 || isNaN(weight)){
    results.innerHTML = `Please Enter a Valid weight (${weight})`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2); 

    //show the results
    //results.innerHTML = `<span>${bmi}</span>`
    if(bmi < 18.6){
      results.innerHTML = `<span>${"Under Weight"} : ${bmi}</span>`
    }else if(bmi > 18.6 && bmi < 24.9){
      results.innerHTML = `<span>${"Normal Weight"} : ${bmi}</span>`
    }else{
       results.innerHTML = `<span>${"Over Weight"} : ${bmi}</span>`
    }
  }

})

```

## project 3 

```javascript
const clock  = document.querySelector("#clock");

// for getting the updated date we have methods of Date object
// let date = new Date();
// console.log(date.toLocaleTimeString())

// But want to update every second and show us as our clock (Check below)
setInterval(function (){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)




// The setInterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// 1 second = 1000 milliseconds.
```

## project 4 

```javascript
// const randomNumber = Math.floor((Math.random() *100)+1);
//console.log(randomNumber)

let randomNumber = parseInt((Math.random() *100)+1);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaning  = document.querySelector(".lastResult")
const lowOrHi  = document.querySelector(".lowOrHi")
const startOver  = document.querySelector(".resultParas")

const p = document.createElement("p");

//Now lets make a array which stores the users guesses
let prevGuess = [];
let numGuess = 1 ; // to limit him from guessing

// A counter for playing game
let playGame = true ;

//Task 0 : check if player is eligible to play game or not
if(playGame){
  //Then our sumbit button have to listen
  submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  })
}

//Task 1 : To check if the given guess is a valid input or not
function validateGuess(guess){

  if(guess < 1 || guess > 100 || isNaN(guess)){ // guess === "" --> isNaN covers this
    alert("Please enter a valid number !")
  }
  //Task 1.1 : To check if the game is still on or not
  else{  
    prevGuess.push(guess);
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over . Random number was ${randomNumber}`);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }

  }
}

// Task 2 : To check the guess is correct or not
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`Your guess is TOOO low `);
  }
  else if(guess > randomNumber){
    displayMessage(`Your guess is TOOO high`);
  }
}

//Task 2.1 : To display the guess : This  contains the cleanUp Code
function displayGuess(guess){
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaning.innerHTML = `${11 - numGuess}`
}
//Task 2.2 : To display the message for too low or high
function displayMessage(message){
  lowOrHi.innerHTML =  `<h2>${message}</h2>` 
}

//Task 3 : for ending Game
function endGame(){
  userInput.value = "";
  userInput.setAttribute("disabled" ,"") ; // as it takes two input
  submit.setAttribute("disabled" ,"");

  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame" >Start New Game</h2>`
  p.style.backgroundColor = "black"
  p.style.padding = "15px"
  remaning.innerHTML = "0"

  startOver.appendChild(p);
  playGame = false;
  newGame();

}

//Task 4 : for new Game
function newGame(){
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener("click", function(e){
    randomNumber = parseInt((Math.random() *100)+1);
    prevGuess = [];
    numGuess =1;
    guessSlot.innerHTML = ""
    remaning.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute("disabled")
    submit.removeAttribute("disabled")
    startOver.removeChild(p)
    displayMessage("");
    playGame = true;
  })
}


```