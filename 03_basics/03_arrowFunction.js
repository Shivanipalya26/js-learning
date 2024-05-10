const user = { 
    username : "Shivani", 
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Cari"
// user.welcomeMessage()

// console.log(this)

// function coffee(){
//     const username = "shivani"
//     console.log(this.username)          //this doesn't work in function
// }

// coffee()

// const coffee = function() {
//     const username = "shivani"
//     console.log(this.username)
// }

// const coffee = () => {
//     const username = "shivani"
//     console.log(this)
// }

// coffee()

// () => {}         arrow function

// const addTwo = (num1, num2) => {
//     return num1+ num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "Shivani" })


console.log(addTwo(5,5))