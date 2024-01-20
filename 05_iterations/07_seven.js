// Reduce method
const myNUms = [1,2,3]

const myTotal = myNUms.reduce(function (acc,currval){
    console.log(`acc : ${acc} and currval : ${currval}`);
    return acc + currval
},0) // after callback fun. we pass the value of acc

console.log(myTotal);