class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return `${this._email}`
    }

    set email(value) {
        this._email = value
    }

    get password() {
        // return this._password.toUpperCase()
        return `${this._password}shivani`
    }
    
    set password(value) {
        this._password = value
    }
}

const person1 = new User("xyz@google.com", "abcde")
console.log(person1);
console.log(person1.password)
console.log(person1.email);