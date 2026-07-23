// // Q1
// // Given:
let marks = {
  maths: 80,
  science: 90,
  english: 70
};

// // Find total marks.

// let total = marks.english + marks.maths + marks.science;
// console.log(total);
// let highest = Math.max(marks.english, marks.science, marks.maths)
// console.log(highest);
// delete marks.maths;
// let marks.sst = 85
// console.log(marks)


// Q2
// From above object, find subject with highest marks.

// const key = Object.keys(marks).filter(k => marks[k] === highest);      // Object.keys(marks) access each keys of the obj;
// console.log(key)
        // OR
// for(let sub in marks){
//   if(marks[sub] === highest){
//     console.log(sub);
//   }
// }


// Q3
// Replace value of every property by multiplying it by 2.
// Input:

// const obj = {a:2, b:3}

// Object.keys(obj).forEach(key => {
//   obj[key] *= 2;
// });

        //OR

// for(let keys in obj){
//   obj[keys]*=2;
// }

// console.log(obj);


// Nested Objects (Important)
// Q4
// Access safely:
// user.profile.address.city
// Return "Not Found" if any level is missing.

// const profile = {
//   userName: "Ravan",
//   gender: "Male",
//   // address: {
//     city: "Dhanbad",
//     state: "Jharkhand",
//   // }
// }

// function data() {
//   try {

//     if (profile.address.city !== undefined) {
//       console.log(profile.address.city);
//       return
//     }
//     if (profile.address.city === undefined) {
//       console.log("Not found")
//       return
//     }
//   }

//   catch (err) {
//     console.log("Not found")
//   }
// }
// data();



// Q5
// Count total properties including nested ones.
// Example:
// const obj = { a:1, b:{x:2, y:3, z:4},c:8 }
// let c=0;
// for(let key in obj){
//   if(typeof obj[key] === "object"){
//     for(let k in obj[key]){
//       c++;
//     }
//   }
//   else{
//     c++;
//   }
// }

// console.log(c)
// Output → 3



// Q6
// Check if a given key exists anywhere inside nested object.
// Return true/false.

// const profile = {
//   userName: "Ravan",
//   gender: "Male",
//   address:{
//     city:"Dhanbad",
//     state: "Jharkhand",
//   }
// }
// const exist = ("gender" in profile);
// console.log(exist)


// Q7
// Sum all numeric values inside nested object.
// Example:

// const obj = {a:10, b:{x:5, y:15}}
// let sum=0;
// for(let key in obj){
//   if(typeof obj[key] === "object"){
//     for(let k in obj[key]){
//       sum+=obj[key][k];
//     }
//   }
//   else{
//     sum+=obj[key];
//   }
// }

// console.log(sum)
// Output → 30
