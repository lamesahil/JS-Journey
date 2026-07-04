// for

for (let i = 10; i <= 20; i++) {
    const element = i;
    if (element == 19) {
        //console.log("19 is best number");
    }
    //console.log(element);
    
}

// console.log(element); // ReferenceError: element is not defined

for (let i = 2; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myDC = ["flash", "batman", "superman"]
//console.log(myDC.length);
for (let index = 0; index < myDC.length; index++) {
    const element = myDC[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 10; index <= 20; index++) {
//     if (index == 19) {
//         console.log(`Detected 19`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 10; index <= 20; index++) {
    if (index == 19) {
        console.log(`Detected 19`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}