let gameSeq=[];
let userSeq=[];

let btns = ['red', 'yellow', 'green', 'purple'];

let started= false;
let level = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
});

   function levelUp(){
    userSeq = [];
   level++;
   h2.innerText=`Level ${level} `;
   let randmIndx = Math.floor(Math.random()*3);
   let randmColor = btns[randmIndx];
   let randmBtn = document.querySelector(`.${randmColor}`);
   gameSeq.push(randmColor);
   console.log(gameSeq);
   btnFlash(randmBtn);

}
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
      setTimeout(levelUp, 1000);
      }
    } else{
        h2.innerHTML = `Game Over!Your score was<b>${level}</b><br> Press any key to start.`;
        h3.innerHTML = `Highest score :${level}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";   
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
