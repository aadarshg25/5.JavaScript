// For In loop
// To loop through objects we can use FOR IN loop

const myObject = {
    "js" : "javascript",
    cpp : "c++",
    ruby : "ruby", 
    swift : "swift by apple"
}

// for (const key in object) {  // syntax

// }
for(const key in myObject){  // "key" here gives us the keys of our object
    //console.log(`${key}  is shortcut for ${myObject[key]}`);
        // js  is shortcut for javascript
        // cpp  is shortcut for c++
        // ruby  is shortcut for ruby
        // swift  is shortcut for swift by apple
}

// lets try for arrays
const programming = ["js" ,"cpp" ,"java" ,"py"]
for(const lang in programming){  // Here the keys returns the key value or index of any array whereas in forof it retrun the value itself
    // console.log(programming[lang]);
            // js
            // cpp
            // java
            // py
}
// For String
const greetings = "Hello World !"
for(const greet in greetings){
    //console.log(greetings[greet]); // same result
}

// For Maps
const myMap = new Map();
myMap.set("locker 1", "key 1")
myMap.set("locker 2", "key 2")
myMap.set("locker 3", "key 3")

for(const lock in myMap){
   // console.log(lock); // No output : map is non-itteratable
}