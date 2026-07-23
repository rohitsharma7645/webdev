// Q1

// let heading = document.querySelector("h2");
// heading.innerText += " from Apna College students";
// console.dir(heading.innerText);

//Q2

let box = document.querySelectorAll(".box");
console.log(box);
let idx = 1;
for(let val of box){
    val.innerText = `Box ${idx}`;
    idx++
}
// box[0].innerText = "Box1";
// box[1].innerText = "Box2";
// box[2].innerText = "Box3";

console.dir(box.innerText);