function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("I");
}

// sayMyName()

function add(a,b){
    // console.log(a+b);
}

function addOther(a,b){
    // let result = a+b
    // return result

    return a+b
}

const addNum = addOther(8,3)
// console.log(addNum);
add(2, "3")
add("shi", "vani")

// function userLoggedIn(username = "shivani") {
function userLoggedIn(username) {
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userLoggedIn("Shivani"));
// console.log(userLoggedIn("cali"));
// console.log(userLoggedIn());

function calculateItemCart(...num1){
    return num1
}

// console.log(calculateItemCart(200, 400, 500, 600));

const obj = {
    username: 'shivani',
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(obj)

// handleObject({
//     username: "sachi", 
//     price: 399
// })

const newArr = [1,2,3,4,5]

function returnSecondVal(getArr){
    return getArr[2]
}
// console.log((returnSecondVal(newArr)))

console.log(returnSecondVal([100, 200, 300, 400]))