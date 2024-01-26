# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# solution code

## project 1

```Javascript
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