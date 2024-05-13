const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.map( (nums) => nums + 10)
// console.log(newNums);

// const newArr = []
// myNums.forEach( (nums) => {
//     newArr.push(nums+10)
// })

// console.log(newArr);

const newNums = myNums
                .map( (nums) => nums * 10)
                .map( (nums) => nums + 1)
                .filter( (nums) => nums > 20)

console.log(newNums);
