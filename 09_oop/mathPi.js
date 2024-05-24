const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger',
    price : 500,
    isAvailable: true,

    orderChai : function() {
        console.log("Chai nhi banegi");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})


console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
