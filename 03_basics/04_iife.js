//Immediately Invoked Function Expressions(IIFE)

(function connect(){
    console.log(`DB connected`);
})();

// ()()         difficulties occur due to global scope pollution, so use IIFE and jo function immediately execute ho jae

(function connectTwo(){
    //named IIFE
    console.log(`DB connected Two`);
})();

( () => {
    console.log(`successful`)
}) ();

((name) => {
    console.log(`${name}`);
}) ("Shivani")