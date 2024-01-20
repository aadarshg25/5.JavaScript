//Normal table print
for (let i = 1; i <= 10; i++) {
    //console.log(`\nTable of ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(i + ' * ' + j +  ' = ' + i*j );
    }
}

// for array there better ways than this
const  myArray = [1,2,3,4]
for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
}
//1
// 2
// 3
// 4
// undefined // see when it goes out of bound it dosent give errorn it give undefined