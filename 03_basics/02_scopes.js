// var c = 200
let a = 100

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "shivani"

    function two() {
        const medium = "youtube"

        console.log(username)
    }
    // console.log(medium)
    two()
}

// one()

if(true){
    const username = "Shivani"
    if(true){
        const website = " medium"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)

// ++++++++++++++++++++interesting+++++++++++++++++++++++++++

addOne(5)
function addOne(num) {
    return num + 1
}
// addOne(5)

addTwo(5)
const addTwo = function(num) {
    return num + 2
}

