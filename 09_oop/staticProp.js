class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username}`);
    }

    static createID() {
        return `123`
    }
}

const person1 = new User("Shivani")
person1.logMe()
// console.log(person1.createID())


class Teacher extends User{
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const person2 = new Teacher("Caiiii", "cai@fb.com")
console.log(person2);
person2.logMe()
// console.log(person2.createID());