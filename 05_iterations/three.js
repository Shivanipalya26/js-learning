//for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting = "Good evening"
for (const greet of greeting) {
    // console.log(greet);
}


const map = new Map()
map.set('IN', "INDIA")
map.set('UK', "UNITED KINGDOM")
map.set("GE", "GERMANY")
map.set('IN', "INDIA")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const obj = {
    game1 : 'GTA',
    game2 : 'RoadRash'
}

// for (const [key, value] of obj) {                //objects are unable to iterate(error)
//     console.log(key, ':-', value);               
// }

