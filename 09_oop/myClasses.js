//ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPasswd() {
        return `${this.password}abc`
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("bheem", "bheem@fb.com", "123456")
console.log(user1.encryptPasswd());
console.log(user1.changeUserName());


//behind the scene

function UserNew(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

UserNew.prototype.encryptPasswd = function() {
    return `${this.password}abc`
}

UserNew.prototype.changeUserName = function() {
    return `${this.username.toUpperCase()}`
}

const person1 = new UserNew("per", "per@fb.com", "12345")
console.log(person1.encryptPasswd())
console.log(person1.changeUserName())