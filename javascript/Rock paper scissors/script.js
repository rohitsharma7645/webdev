let yourScore = document.querySelector(".your-num-score");
let compScore = document.querySelector(".comp-num-score");
let choices = document.querySelectorAll(".circle");
let winMsg = document.querySelector(".win-msg");
let yourNumScore = 0;
let compNumScore = 0;
const genCompChoice = () =>{
    const options = ['rock', 'paper', 'scissor'];
    const idxGuess = Math.floor(Math.random()*3);         // from math.random comp guess the num btw 0-1(exclude 1) and multiply this function num by n it guess btw 0-4
    return options[idxGuess];                 // (till 3.999...) and to remove decimal value we use math.floor (it gives the whole value)             
    
}

choices.forEach(choice => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // const compChoice = genCompChoice();
        game(userChoice);
    })
});

const game = (userChoice) =>{
    console.log(`You chosen ${userChoice} `);
    const compChoice = genCompChoice();
    console.log(`Comp chosen ${compChoice}`);
    if (userChoice===compChoice){
        console.log("Draw");
        winMsg.innerHTML="Game Draw";
    }
    else if (userChoice==="rock"){
        if(compChoice==="paper"){
            console.log('Comp won');
            compNumScore++;
            compWin();
        }
        else{
            console.log('You won');
            yourNumScore++;
            userWin();
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="scissor"){
            console.log('Comp Won');
            compNumScore++;
            compWin();
        }

        else{
            console.log('You won');
            yourNumScore++;
            userWin();
        }
    }
    else if(userChoice==="scissor"){
        if(compScore==="rock"){
            console.log('Comp won');
            compNumScore++;
            compWin();
        }
        else{
            console.log('You won');
            yourNumScore++;
            userWin();
        }
    }
}

const userWin = () =>{
    winMsg.innerText="You won";
    yourScore.innerText=yourNumScore;
}
const compWin = () =>{
    winMsg.innerText="Computer Won";
    compScore.innerText=compNumScore;
}
