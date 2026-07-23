// Reduce:- It performs some for operations and reduce arr to single value.
//Syntax:-
    // arr.reduce((resVal, currVal) => some task);
// Q1:- Sum
// let arr = [1,2,5,4,8,9];

// let sum = arr.reduce((res, cur) => {
//     return res + cur;
// })
// console.log(sum);

// Q2:- biggest num

// let arr = [1,2,5,14,8,9];

// let biggest = arr.reduce((pre, cur) => {
//     return pre > cur ? pre : cur;
// })

// console.log(biggest);

//Q3:- Product and Sum

let n = prompt("Enter the size of the array:");
let arr = [];
for(let i=0;i<n;i++){
    arr[i] = i+1;
}
console.log(arr);

let sum = arr.reduce((res,cur) => {
    return res + cur;
});
let fact = arr.reduce((res,cur) => {
    return res * cur;
});

console.log("Sum of n no. = ",sum);
console.log("Factorial of n no. = ",fact);