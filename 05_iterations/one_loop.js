for(let index = 0; index < 10; index++) {
    const ele = index;
    if(ele == 5){
        // console.log("5 is best no");
    }
    // console.log(ele);
}

// console.log(index)

for(let i = 0; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop ${j} & Outer loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["flash", "batsman", "superman"]
// console.log(myArray.length);
for(let index = 0; index < myArray.length; index++) {
    const ele = myArray[index]
    // console.log(ele);
}


//break and continue

for(let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
}
for(let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}