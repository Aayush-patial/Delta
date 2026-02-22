let yourScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#your-score");
const computerScorePara = document.querySelector("#compScore");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const RandIndx=Math.floor(Math.random()*3);
    return options[RandIndx];
};
const drawGame = () => {
    msg.innerText=("Draw game. Play again");
    msg.style.backgroundColor="White";
    msg.style.color="Black";
}

const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin){
      yourScore++;
      userScorePara.innerText=yourScore;
        msg.innerText=('You win!');
        msg.style.backgroundColor="green";
    }else{
       computerScore++;
       computerScorePara.innerText=computerScore;
        msg.innerText=('You lose.');
        msg.style.backgroundColor="red";
    }
}
const playGames= (userchoice) => {
    //Generate computer choice:
    const compchoice=gencompchoice();
    if (userchoice === compchoice){
        //draw
       drawGame();
    }else {
        let userWin = true;
        if( userchoice === "rock"){
            //if computer chooses scissor or paper then:
             userWin = compchoice ==="paper" ? false:true;
        } else if (userchoice === "paper"){
            //if computer choose rock or scissors then :
            userWin = compchoice ==="scissors" ? false:true;
        } else{
            userWin = compchoice ==="rock" ? false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    const userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playGames(userchoice);
    });
});