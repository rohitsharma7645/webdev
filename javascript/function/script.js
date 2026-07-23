//q1

// function countVowels(str){
//     let n = 0;
//     for (let char of str){
//         if(char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'){n++;}
//     }
//     return n;
// }

// let vwls = countVowels("Hello");
// console.log(vwls);

//q2
//Using Arrow function:- It is generally stored in a variable. We use the variable to call arrow function. Calling is same as normal function and used for small function.

const countVowels = (str) => {      // from (str) to return n, the function is called arrow function
    let n = 0;
    for (let char of str){
        if(char === 'a'||char === 'e'||char === 'i'||char === 'o'||char === 'u'){n++;}
    }
    return n;
}
console.log(countVowels("Rohit Sharma"));