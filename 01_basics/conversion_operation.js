score = "33"

console.log(typeof score);
console.log(typeof (score));

let num = Number(score)
console.log(typeof num);
console.log(num)

scoreNew = "23abc"
console.log(typeof scoreNew);
console.log(scoreNew)

let numNew = Number(scoreNew)
console.log(typeof numNew);
console.log(numNew)

// "33" => 33
//"23abc" => NaN (Not a number)
//true => 1, false => 0

let isLoggedIn = 0
let booleanLoggedIn = Boolean(isLoggedIn)

console.log(booleanLoggedIn)


//1 => true, 0 => false
// "" => false
// "abc" => true


let someNumber = 33
let stringNumber =String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber);