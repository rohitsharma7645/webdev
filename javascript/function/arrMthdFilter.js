// Filter:- It creates new arr and filters some value on the basis of some conditions.

// Q1 - Even No.

// let arr = [1,2,3,4,5,6];
// let evenNums = arr.filter(val => {
//     return val%2 ===0;
// });

// console.log(evenNums);

// Q2 - Marks more than 80

let arr = [81,64,76,92,70,88];
let newArr = arr.filter(marks => {
    return marks>80;
})

console.log(newArr);