// Reduce method
const myNUms = [1,2,3]

// const myTotal = myNUms.reduce(function (acc,currval){ // In this the currval denotes the item we are in like in foreach and all
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },0) // after callback fun. we pass the value of acc

// Using arrow function
const myTotal = myNUms.reduce((acc,currval)=>acc+currval,0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "java course",
        price : 3999
    },
    {
        itemName : "Python course",
        price : 5999
    },
]

const priceTOPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceTOPay);