// const myName = "Shivani    "
// const myPhone = "Moto      "
// console.log(myName.length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivani = function() {
    console.log("Shivani is present in all objects");
}

Array.prototype.heyShivani = function() {
    console.log("Nice to meet you");
}

heroPower.shivani()
myHeros.shivani()
myHeros.heyShivani()
// heroPower.heyShivani()




// inheritance


const user = {
    name: "Google",
    email: "google@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : "JS notes",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user        //teacher can access all properties of user


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherName = "umberlla     "

String.prototype.trueLength = function() {
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

anotherName.trueLength()
"iceTea  ".trueLength()
