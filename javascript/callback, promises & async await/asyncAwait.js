//Async & await

// async function always returns a promise.
// async function myFunc( ) { .... }
// await pauses the execution of its surrounding async function until the promise is settled.

function getData(data){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", data);
            resolve("Data get successfully");
        }, 2000);
    });
}

// async function data() {
//     console.log("Getting data 1...")
//     await getData(1)
//     console.log("Getting data 2...")
//     await getData(2)
//     console.log("Getting data 3...")
//     await getData(3)
//     console.log("Getting data 4...")
//     await getData(4)
// }
// data();

// to remove this call [i.e data()] bcz it unnecessary so we use IIFE(Immediately Invoked Function Expression) 

// IIFE:- IIFE is a function that is called immediately as soon as it is defined.
// Syntax:-
//      (()=>{
            // block of code
//    })()  
//         OR
//      (function(){
            // block of code
//    })()  
// we can write the above func as:-

(async function() {                             // we can also use arrow func so replace function() with ()=>
    console.log("Getting data 1...")
    await getData(1)
    console.log("Getting data 2...")
    await getData(2)
    console.log("Getting data 3...")
    await getData(3)
    console.log("Getting data 4...")
    await getData(4)
})();