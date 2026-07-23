const asyncfunc1 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Data 1")
            resolve("Data get successfully");
        }, 3000);
    }) 
}