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