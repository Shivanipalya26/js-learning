class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addUser() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const person1 = new Teacher("Cassie", "cas@fb.com", "123456")
console.log(person1);
person1.addUser()
person1.logMe()


const person2 = new User("Carl")
person2.logMe()


// console.log(person1 === person2);
console.log(person2 instanceof Teacher);
console.log(person1 instanceof Teacher);
