let userseq =[];
let gameseq = [];
let btns = ["yellow","green","blue","red"];

let h2 = document.querySelector("h2");
let started = true;
let level = 0;

document.addEventListener("keypress",function(){

    if (started==true){
        console.log("game started");
        started = false;
        
        levelup();
    }

    });


function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
},250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },250);
    }

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //button flash

let randomidx = Math.floor(Math.random()*3);
let randomColor = btns[randomidx];
let activebtn = document.querySelector(`.${randomColor}`);
gameseq.push(randomColor);
console.log(gameseq);
 gameFlash(activebtn);
}
function checkAns(index){
    console.log(level);
    if(userseq[index]===gameseq[index]){
          if(userseq.length===gameseq.length){
        setTimeout(levelup,1000);
          }
    }
    else{
        h2.innerHTML=`Game Over! Your score was ${level}</br> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },180);
        reset();
    }
}


function btnpress(btn){
    let button1=this;
    userFlash(button1);
    let usercolor=button1.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(b of allbtn){
b.addEventListener("click",btnpress);
}
function reset(){
    started=true;
    userseq=[];
    gameseq=[];
    level=0;
}