// // set timeout
// const greet = () =>{
//     console.log("Hello");
// }

// setTimeout(greet,3000)

// //OR

// setTimeout(()=>{
//     console.log("hello world")
// },2000)


// Callback hell

function getData(data, getNextData){
    setTimeout(() => {
        console.log("Data", data)
        if(getNextData){            // for if there is next data
            getNextData();
        }
    }, 2000);
}

// getData(4, getData(1))          // we cannot use parentheses in callback func bcz it execute immediately so we have to write:-
console.log("Getting data 1...")
getData(1, ()=>{
    console.log("Getting data 2...")
    getData(2, ()=>{
        console.log("Getting data 3...")
        getData(3, ()=>{
            console.log("Getting data 4...")
            getData(4)
        })
    })
})