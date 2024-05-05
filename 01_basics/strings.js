const name = "Shivani"
const repoCnt = 50

// console.log(name + repoCnt + " Value")      //outdated

console.log(`hiii my name is ${name.toUpperCase()} and my repo count is ${repoCnt}`)

const gameName = new String("Shivani-At")

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));
console.log(gameName.lastIndexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);

const newStringOne = "    shivani.    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivani.com/shivani%20palya"
console.log(url.replace('%20', '-'))

console.log(url.includes('shivni'));

console.log(gameName.split('-'));