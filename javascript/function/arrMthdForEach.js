// For each:- 
    // This is a function that takes a function as parameters. This is also called higher order function bcz they takes function as arguments or return a function.

    // Syntax:-

        // arr.forEach(callBackFunction); 
            //callBackFunction - The function that is passed as argument, we write the function defination as parameters, arr el are arguments of callBack function and we generally use arrow function
//Ex:-

let arr = [21,22,13,11,15];

// arr.forEach(function printVal(val) {
//     console.log(val);
// });
//OR
arr.forEach((val, idx, arr) => {
    console.log(val*val, idx, arr.toString());
});

