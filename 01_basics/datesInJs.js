//dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);

// let myCreatedDate = new Date("2023-10-12");

 let myCreatedDate = new Date("12-10-2023");
// console.log(myCreatedDate.toLocaleString());

let TimeStamp = Date.now()
// console.log(TimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate.getMonth());

// newDate.toLocaleString('default', {
//     weekday: "long",
// })

const options = {
    weekday: "long"
}

console.log(newDate.toLocaleString("en-US", options));
