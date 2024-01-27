## project 1 
```javascript
// generating random color

// let randomNumber = Math.floor(Math.random() *16) // we need values 0-15
// we know color are hex coded and hex have range 0-9-A-F
// are of len : 6 with a # in start

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let  color  = "#"
  for(let i =0;i<6;i++){
    color += hex[Math.floor(Math.random() *16)];
  }
  return color;
}
console.log(randomColor())
// let toggle ;
// document.getElementById("start").addEventListener("click",(e)=>{
//     const changeColor = function(){
//       document.querySelector("body").style.backgroundColor = randomColor();
//     }
//     toggle = setInterval(changeColor,1000);
// })
// document.getElementById("stop").addEventListener("click",(e)=>{
//     clearInterval(toggle);
// })
let toggle ;
document.getElementById("start").addEventListener("click",(e)=>{
    const changeColor = function(){
      document.querySelector("body").style.backgroundColor = randomColor();
    }
    // but as it is null now so cant put anything in null so we need to make some checks
    if(!toggle){
      toggle = setInterval(changeColor,1000);
    }
})
document.getElementById("stop").addEventListener("click",(e)=>{
    clearInterval(toggle);
    // after the use of intervalID we set it to null as a cleanup code
    toggle = null;
})
```

## project 2 
```javascript
const insert = document.querySelector("#insert")

window.addEventListener("keydown",(e)=>{

    insert.innerHTML = `
    
    <div>
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    
    </div>`


})



```