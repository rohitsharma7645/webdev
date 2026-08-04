const sum = (a,b)=> a+b;
const mul = (a,b)=> a*b;
const g=9.8;


// module.exports = g;     // a special obj used to export any data from the file

let obj = {
    sum:sum,
    mul:mul,
    g:g
}

module.exports = obj; 