// Mutator methods:-Existing arr get changed
// push()-add el at last
// unshift()- add el at beg return new array
// pop()- remove from last
// shift()- remove from beginning return new arr

// Accessor:- Existing arr remains same
// .concat()
// .join()
// .indexof()
// .slice(from, end)
// .splice(from,totalElToRemove, insertEl(optional))

// let arr1 = [1,2,3,4,5];
// let arr2 = [8,6,9]
// let newArr = arr1.concat(arr2)
// arr.push(8);
// console.log(newArr)

// const arr = [1,2,5,6]
// let find = arr.find(num => num == 6)
// console.log(find);

// const arr = [{id:1, firstName: "Om"},{id:2, firstName: "Raj"},{id:3, firstName: "Prem"}]

// let find = arr.find(el => el.id==4)
// console.log(find)

// let arr = [{},{}];
// // let obj = {
// //     id:1,
// //     name:"Raj",
// // }
// // arr.push(obj);
// arr[0].name = "Raj",
// console.log(arr.find(el => el.name == "Raj"))


const arr =[10,5,100,25];

let newArr = arr.sort();    // this is not working bcz it is converting the num into string and arranging like dictionary method
console.log(newArr);