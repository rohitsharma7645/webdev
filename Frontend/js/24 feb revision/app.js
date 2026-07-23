// const userName = document.querySelector("#name");

// document.querySelector("#btn").addEventListener("click", ()=>{
//     let c=0;
//     console.log(userName.value);
//     for(let char of userName.value){
//         c++;
//     }
//     console.log(c);
// })

const profile = {
    firstName: "Rohit",
    age: "21",
}

// const addKey = (obj, key, val) =>{
//     let k = key
//     obj[k] = val;
// }
// addKey(profile,"roll", 21);
// console.log(profile);
const countKey = (obj) =>{
    let c=0;
    for(let key in obj){
        c++;
    }
    console.log(c)
}
countKey(profile);
console.log(obj);

