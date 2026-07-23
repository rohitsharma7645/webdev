let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector(".new-btn");

let turn = 0;
let count = 0;
let winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turn===0){
            box.innerText = "X";
            
            turn = 1;
        }
        else{
            box.innerText = "O";
            turn = 0;
        }
        box.disabled = true;
        checkWinner();
        let isWinner = checkWinner();
        count++;
        if(isWinner==false){
            checkGameOver();
        }
    });
});
let checkGameOver = () => {
    if (count === 9){
        msg.innerText = "Game over";
        msgContainer.classList.remove("msg-container");
        count=0;
    }
    
}


const checkWinner = () =>{
    for(let pos of winPatterns){
        let val1 = boxes[pos[0]].innerText;
        let val2 = boxes[pos[1]].innerText;
        let val3 = boxes[pos[2]].innerText;

        if(val1 !== "" && val2 !== "" && val2 !== ""){
            if(val1 === val2&& val2 === val3){
                style();
                msg.innerText = `${val1} won the game!`;
                msgContainer.classList.remove("msg-container");
                disableBoxes();
                return true;
            }
        }
    }
}

let disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
let newGame = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        turn = 0;
        count=0;
        msgContainer.classList.add("msg-container");
    }
}
newBtn.onclick = newGame;
resetBtn.onclick = newGame;

let style = () =>{
    msgContainer.style.marginTop = "300px";
    msgContainer.style.marginBottom = "400px";
}