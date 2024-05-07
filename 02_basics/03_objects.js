//singleton 
// Object.create

//Object literal

const mySym = Symbol("myKey")

const JsUser = {
    name: "Shivani", 
    [mySym]: "myKey1",
    age: 20, 
    email: "abc@google.com",
    isLoggedIn: false, 
    lastLogInDays: ['Monday', 'Saturday'] 
}

// console.log(JsUser);
// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);

JsUser.email = "shivani@amazon.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email = "shivani@microsoft.com"
// console.log(JsUser);

JsUser.greetings = function() {
    console.log("Hello JS user");
}

JsUser.greetingsTwo = function() {
    console.log(`Hello, ${this.name}`);
}

JsUser.greetings();
console.log(JsUser.greetings);
console.log(JsUser.greetings());
JsUser.greetingsTwo()