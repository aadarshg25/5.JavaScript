let score  =200;

if(score> 100){
     var power = "fly";
}
//console.log(`User power : ${power}`); // User power : fly

// Normally above code will give error but as we know that var has global scope so it works
// same it will work if just write power = "fly" without anything

const balance = 1000;

// if(balance > 500) console.log("test"),console.log("test2"),console.log("test3"); // test test2 test3 (inplicit)

//---------------------------------------------------------------------------------------------------------------------

// Switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } 

const month = 3;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
            console.log("Feb");
            break;
    case 3:
            console.log("Mar");
            break;
 //remeber if we remove this break statement then it will execute the whole code below it without checking(untill it enconter next break) except for default
    case 4:
            console.log("April");
            break;
    case 5:
            console.log("may");
            break;
    case 6:
            console.log("jun");
            break;
    case 7:
            console.log("july");
            break;
    case 8:
            console.log("aug");
            break; 
            
    default :
        console.log("No a valid Month");
        break;
}




