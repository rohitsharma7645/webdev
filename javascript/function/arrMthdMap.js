// Map:- It is similar as forEach but it creates a new arr with the result of some operations. The value of callback func used to create a new form of arr.

// Syntax:-
    // Array.map(callbackFunc(val, idx, arr));      // but generally val is used only

let arr = [21,41,62,55,24];

let newArr = arr.map(val => {
    return val%5;
});

console.log(newArr);