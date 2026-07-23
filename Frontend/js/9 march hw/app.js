let body = document.querySelector("body")
let btn = document.querySelector("#btn");
let currMode = "Light";

let mode = () =>{
    if(currMode === "Light"){
        currMode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
   
    }
}

btn.onclick = mode;