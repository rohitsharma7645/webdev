// Event handling:- handling in js file has more priority than inline event handling
//syntax:-
//  node.event = () =>{ works} 

// let btn1 = document.querySelector(".btn");

// btn1.onclick = () => {
//     console.log("Button was clicked");     // you can do multiple things like print some value or something else  
// };

// let box = document.querySelector("#box");

// box.onmouseover = () => {
//     console.log("You hovered the box");
// };

// EVENT OBJECT:- It is a special object passes as argument inside the arrow function that have information about the event

// btn1.onclick = (e) => {         // e is a variable 
//     console.log("Button was click");
//     console.log(e);
//     console.log(e.target);      // give html code of 
//     console.log(e.type);        // print type of the event
//     console.log(e.clientX, e.clientY);      // position where event occured. in this event it means where the mouse was clicked
// }

// EVENT LISTENERS:-  We cannot perform multiple events of a single node or do both inline and js event handling together. So overcome from this problem we use event listners

// Syntax:-
//   node.addEventListener(name, callback);
//   node.removeEventListener(name, callback);

// btn1.addEventListener("click", () =>{
//     console.log("Event handle 1");
// });

// btn1.addEventListener("click", () =>{
//     console.log("Event handle 2");
// });

// const callback = () =>{
//     console.log("Event handle 3");
// }
// btn1.addEventListener("click", callback);

// btn1.addEventListener("click", () =>{
//     console.log("Event handle 4");
// });

// btn1.removeEventListener("click", () =>{    // It cannot remove the 3rd handler whereas we wrote same call function bcz both have 
//     console.log("Event handle 3");          // separate memory so we have to use a variable 
// });

// btn1.removeEventListener("click", callback);



// q1
let body = document.querySelector("body")
let btn = document.querySelector("#btn");
let currMode = "Light";

let mode = () =>{
    if(currMode === "Light"){
        // body.style.backgroundColor = "black";
        // btn.style.color = "white";
        currMode = "Dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        // body.style.backgroundColor = "white";
        // btn.style.color = "black";
        currMode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
   
    }
}

btn.onclick = mode;