// Problem with  forEach loop
const coding = ["js" , "py" , "java", "csharp"]

const values = coding.forEach((item)=>{
    return item;
})
// console.log(values); //undefined
// The problem is that the forEach dosent return anything even if we say it to do it 
//-------------------------------------------------------------------------------------------
//Filter method in Array

const myNums = [1,2,3,4,5,6,7,8,9]

// let newNums = myNums.filter((num)=> num >4) // we used implicid return here(that's why here there is no return statement)

let newNums = myNums.filter((num)=>{
      // console.log(num);   //  if we log it will print the whole array irrespective of the condition
    return num > 4 ; // if we do not mention return here it will give us an [] empty array
})
//console.log(newNums); // [ 5, 6, 7, 8, 9 ]

//same thing can be done with help of forEach loop
let newNums1 = []

myNums.forEach((nums)=>{
    if(nums >4){
        newNums1.push(nums)
    }
})
//console.log(newNums1); //[ 5, 6, 7, 8, 9 ]

//suppose we are given a collection of data from  a database
const books = [
    {title : "Book One" , genre : "fiction" , published  : 1981 , edition : 2004},
    {title : "Book Two" , genre : "Non-fiction" , published  : 1992 , edition : 2008},
    {title : "Book Three" , genre : "History" , published  : 1999 , edition : 2007},
    {title : "Book Four" , genre : "Non-fiction" , published  : 1989 , edition : 2010},
    {title : "Book Five" , genre : "Science" , published  : 2009 , edition : 2014},
    {title : "Book Six" , genre : "fiction" , published  : 1987 , edition : 2010},
    {title : "Book Seven" , genre : "History" , published  : 1986 , edition : 1996},
    {title : "Book Eight" , genre : "Science" , published  : 2011 , edition : 2016}
];

// const userBooks = books.filter((bk) => bk.genre === "History") // books with genre history

const userBooks = books.filter((bk) => {  // bools which are published after 1995 and have genre history
    return bk.published >= 1995 && bk.genre === "History"
} )
// console.log(userBooks);