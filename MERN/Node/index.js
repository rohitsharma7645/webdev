// COMMON

// const print = (name) =>{
//     console.log(`Hello, ${name}`);
// }

// print('Rahul');

const add = (a,b) =>{
    return a+b;
}
const sub = (a,b) =>{
    return a-b;
}

// default export - You can access only one member
// module.exports = add;        // if we want to use one func or var of one module(file) into another so first we have to export it and then import it(where we need it)
// module.exports = sub;   // we can't export it

// Named export
module.exports.add = add;
module.exports.sub = sub;