let gameSeq=[];
let userSeq=[];

let btns=['red','blue','green','yellow'];

let stared = false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(stared==false){
        console.log("Game started");
        stared=true;


        levelUp();
    }
});

function GameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor= btns[randIdx];

    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    // console.log(randIdx);
    gameSeq.push(randColor);
    console.log(gameSeq);
    GameFlash(randBtn);
}


function checkAns(idx){
    console.log(`current level:`,level);

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("Same value");
    } else{
        h2.innerHTML = `Game over!  Your score was <b>${level} </b>. Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor= "white";
        },150)
        reset();
        
    }
}

function btnPress (){
    console.log(this);
    let btn = this;
    GameFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    stared =false;
    userSeq =[];
    gameSeq = [];
    level = 0;
}
