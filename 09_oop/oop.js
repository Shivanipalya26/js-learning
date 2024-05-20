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

    // return this
}

// const user1 = User("ABC", 5, true);
// const user2 = User("XYZ", 15, false);

const user1 = new User("ABC", 5, true);
const user2 = new User("XYZ", 15, false);

console.log(user1);
console.log(user2);
