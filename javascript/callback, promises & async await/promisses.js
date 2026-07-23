// Promises have three state, pending, resolve and reject

// const promise = new Promise((resolve, reject)=>{
//     console.log("It is a promise");
//     reject("Some error")
// })

// function getData(data, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data:", data);
//             resolve("Success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 10000);
//     })
// }

// let data = getData(5);

// const promise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("A promise");
//         resolve("resolved");
//         // reject("some error");
//     });
// }

// // const result = promise();
// // .then used when we have to do after promises get resolved
// promise().then(res=>{                      // res is the msg written in resolve()
//     console.log("successful:", res)
// })
// // .catch used when we have to do after promises get rejected
// promise().catch(err=>{                     // err is the msg written in reject()
//     console.log("Rejected:",err)
// })


// Promise chain

const asyncfunc1 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data 1")
            resolve("Data get successfully");
        }, 3000);
    }) 
}
const asyncfunc2 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data 2")
            resolve("Data get successfully");
        }, 3000);
    }) 
}

console.log("Getting data 1...");
asyncfunc1().then((msg)=>{
    console.log(msg)
    console.log("Getting data 2...");
    return asyncfunc2();
}).then((msg)=>{
    console.log(msg)
})

// function getData(data){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", data);
//             resolve("Data get successfully");
//         }, 3000);
//     });
// }
// getData(1)
//     .then((msg)=>{
//     console.log(msg)
//     return getData(2)
// })
//     .then((msg)=>{
//     console.log(msg)
//     return getData(3);
// })
//     .then(msg=>{
//     console.log(msg)
// })