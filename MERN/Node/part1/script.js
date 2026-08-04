// Process: This obj provides info about, and control over the current Node.js process

// process.argv: return an arr containing the cmd line arg passed when the Node.js process was launched

// let n = 5

// for(let i=0;i<n;i++){
//     console.log("Hello",i)
// }

// console.log("bye")

// console.log(process.argv)



// require - taking data from another file

const math = require('./math')    // buit-in func to include extra modules that exist in separate file

console.log(math.sum(2,3))