const promiseOne = new Promise(function(resolve, reject) {

    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise accomplished");
})


new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("\n Async task 2 completed");
        resolve()
    }, 2000)
}).then(function() {
    console.log("Promise 2 accomplished \n");
})


const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Shivani", email: "abc@gmail.com"})
    }, 4000)
})

promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error) {
            resolve({username: "Shivani", password: "12345"})
        }
        else{
            reject("\n ERROR: Something went wrong")
        }
    }, 5000);
})

// promiseFour.then(function(user){console.log(user);}).catch(function(user){console.log(user);})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((myUsername) => {
    console.log(myUsername);
}).catch((user) => {
    console.log(user);
}).finally(() => console.log("Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Bharat Chandak", password: "1234567"})
        }
        else{
            reject("ERROR: JS is wrong")
        }
    }, 6000);
})

async function consumedPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()


// async function myUser() {
//     try {
//         const response = await fetch('https://api.github.com/users/Shivanipalya26')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR: ", error);
//     }
// }

// myUser()


fetch('https://api.github.com/users/Shivanipalya26')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))
