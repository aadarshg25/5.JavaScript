// As dataTypes is same comparion is quite easy and simple

// console.log(4 == 4);
// console.log(4 > 6);
// console.log(2 <= 4);
// console.log(9 >= 4);

//As the dataType changes the ouput becomes unprdictable
// console.log("2" > 1);  // true
// console.log("02" > 1);  // true

//In javascript equality(==)  and comparion work diferently ex:
// console.log(null > 0);  //f
// console.log(null == 0); //f
// console.log(null >= 0); //t 
//Here problem is that conversion off null can be made to any form NaN ,0 ,etc

// == checks for the value only whereas  === uses strict cheeck i.e, it checks value as well as datatype

console.log("2"==2); // true
console.log("2" === 2); // false

//As for undefined is always will false on comaprison


