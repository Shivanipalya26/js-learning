const coding = ["js", "ruby", "cpp", "swift", "python"]

// coding.forEach( function(val) {
//     console.log(val);
// } );

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName : "JS",
        languageFileName : "Javascript"
    },
    {
        languageName : "Py",
        languageFileName : "Python"
    },
    {
        languageName : "Ru",
        languageFileName : "Ruby"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} : ${item.languageFileName}`);
} )