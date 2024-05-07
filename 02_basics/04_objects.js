// const tinder = new Object()

const tinder = {}

tinder.id = "492022"
tinder.name = "Sammy"
tinder.isLoggedIn = false

console.log(tinder);

const newObj = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shivani", 
            secondName: "Palya"
        }
    }
}

// console.log(newObj);
// console.log(newObj.fullName.userFullName.firstName);

const obj1 = {0 : "a", 1 : "b"}
const obj2 = {3 : "c", 4 : "e"}

// console.log(obj1, obj2);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        email: "xyz@google.com"
    }, 
    {

    }, 
    {

    }
]

users[1].email

console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));