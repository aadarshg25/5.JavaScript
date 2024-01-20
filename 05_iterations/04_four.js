// For Each loop
const coding = ["js" , "py" , "java", "csharp"]

//1.
coding.forEach(function (element,index,arr){  // it brings us the element itself like for of loop does
    //console.log("element : " + element + " index : " +index +" arr : " +arr);
            // element : js index : 0 arr : js,py,java,csharp
            // element : py index : 1 arr : js,py,java,csharp
            // element : java index : 2 arr : js,py,java,csharp
            // element : csharp index : 3 arr : js,py,java,csharp
})

//2.
coding.forEach((item)=>{
    //console.log(item); // js py java csharp
})

//3.
function printMe(item){ 
    console.log(item); // same reult
}

//coding.forEach(printMe) // we have to give referene if are defining outside

// when we have multiple objects inside our this is helpful

const myCoding = [
    {
        language : "java",
        languageFileName : "java"
    },
    {
        language : "javascript",
        languageFileName : "js"
    },
    {
        language : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item)=>{
    for(const key in item){
        console.log(key +  " : " + item[key]);
    }
})