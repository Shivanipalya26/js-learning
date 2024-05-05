//based on how data is stored in memory and how it is accessed datatypes are divided into :-


//Primitive  -> call by value, refernce is not send so all the changes are in its copy

//7 types : string, number, null, undefined, bigint, boolean, symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(anotherId)

//Refrence (Non-primitive)  -> memory m inka refrence create kiya ja sakta h

//arrays, objects, functions

const heros = ["shaktiman", "naaagraj", "doga"]

let myObj = {
    name : 'Shivani', 
    age : 22
}

const myfunction = function() {
    console.log("Hello World");
}

console.log(typeof myfunction)


//Stack (Primitive)  and Heap (Non-Primitive)

