//  Date

const myDate = new Date(); //typeof --> object
// console.log(myDate); //2024-01-11T06:55:47.088Z

// console.log(myDate.toString()); //Thu Jan 11 2024 07:05:44 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); //Thu Jan 11 2024

// console.log(myDate.toISOString()); //2024-01-11T07:05:44.017Z

// console.log(myDate.toJSON()); //2024-01-11T07:05:44.017Z

// console.log(myDate.toLocaleString());//  1/11/2024, 7:05:44 AM
//----------------------------------------------------------------------------------------
//we can also declare date in js
//                            year/month(Starts with 0)/date
const myCreatedDate = new Date(2024,3,30);
// console.log(myCreatedDate.toDateString()); //Tue Apr 30 2024

const myCreatedDate3 = new Date("2024-02-28") //mm-dd-yy or yy-mm-dd
// console.log(myCreatedDate3.toDateString());  //Wed Feb 28 2024

//suppose we give wrong date
const myCreatedDate2 = new Date(2022,1,30); // see it automaticallt adust with it
// console.log(myCreatedDate2.toDateString()); //Wed Mar 02 2022

//---------------------------------------------------------------------------------------------
let timeStamp = Date.now();
// console.log(timeStamp); //1704957926307 time in ms from 1 jan 1970
// console.log(myCreatedDate.getTime()); //1714435200000

//if we want in sec then / by 1000
// console.log(Math.floor(Date.now()/1000)); //1704958212   sec
console.log(myDate.getMonth()); //0 (strats with zero)

//we can define what in want in the options menu i.e, defina object and mention the  things we want
console.log((myDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    day: "numeric",}
  )));