const user = {
    username: "Shivani", 
    loginCnt: 6,
    isSignedIn: true,
    
    getUserDetails() {
        console.log("Got details!!");
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCnt, isSignedIn){
    this.username = username,
    this.loginCnt = loginCnt,
    this.isSignedIn = isSignedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    }

    // return this
}

// const user1 = User("ABC", 5, true);
// const user2 = User("XYZ", 15, false);

const user1 = new User("ABC", 5, true);
const user2 = new User("XYZ", 15, false);

//whenever new keyword is used an empty object is created which is called instance.
//new object is created
//constructor function is called because new keyword
//whatever arguments are written it will be injected in this keyword
//mil jate h function k andar

console.log(user1);
console.log(user2);
console.log(user1.greeting());


//read - instanceof