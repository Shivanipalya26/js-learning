const myNums = [1,2,3]

const initialValue = 0

// const myTotal = myNums.reduce( function(accumulator, currentValue) {
//     console.log(`accumulator ${accumulator} and current value ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue )

// const myTotal = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`${accumulator} and curr: ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue)

// const myTotal = myNums.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "shoes",
        price : 2999
    },
    {
        itemName : "headphone",
        price : 7999
    },
    {
        itemName : "hoodie",
        price : 3999
    }
]

const totalPrice = shoppingCart.reduce( (accumulator, currentValue) => (accumulator + currentValue.price), 0 )
console.log(totalPrice);