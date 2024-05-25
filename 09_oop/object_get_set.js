const User = {
    _email : "edge.ai.com",
    _password : "dkjsaj",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value 
    }
}

const person1 = Object.create(User)
console.log(person1._email);