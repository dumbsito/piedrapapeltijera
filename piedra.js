/* function getComputerChoice(){
    let res=Math.floor(Math.random()*10);
    if(res>=0&&res<=3){
        console.log("Tijera")
    }else if(res>=3&&res<=6){
        console.log("Piedra")
    }else if(res>=7&&res<=9){
        console.log("Papel")
    }
}
console.log(getComputerChoice());

function single(player,compu){
    console.log("You lose!")
}

const player = "rock";
const compu = getComputerChoice();
console.log(single(player, compu));

function game(){
    for (let i = 0; i < 5; i++) {
        single();
     }
     console.log(game());
}*/


const piedrabtn=document.getElementById("piedra");
const Papelbtn=document.getElementById("papel");
const Tijerabtn=document.getElementById("tijera");
const resultText=document.getElementById("start-text");
const userimg=document.getElementById("userimg");
const randomimg=document.getElementById("randomimg");


const rock="Piedra";
const paper="Papel";
const scissor="Tijera";

const tie=1;
const lost=2;
const win=4;
piedrabtn.addEventListener("click",()=>{
  play(rock);
})
Papelbtn.addEventListener("click",()=>{
   play(paper);
})
Tijerabtn.addEventListener("click",()=>{
    play(scissor);
})

function play(option){
    userimg.src="img/"+option+".png";

    resultText.innerHTML="Eligiendo";

    let interval= setInterval(function() {
        const random=calcrandom();
        randomimg.src="img/"+random+".png";
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
 const random=calcrandom();
const result=calc(option,random);

randomimg.src="img/"+random+".png";

  switch(result){
    case tie: resultText.innerHTML="Empate";break;
    case win: resultText.innerHTML="Ganaste"; break;
    case lost: resultText.innerHTML="Perdiste"; break;
  }
},2000);
}
function calcrandom(){
   const number= Math.floor(Math.random()*3);
   switch(number){
    case 0:return rock;break;
    case 1:return paper;break;
    case 2:return scissor;break;
   }
};
function calc(option,random){
    if(option==random){
        return tie;
    }else if(option==rock){
        if(random==paper)return lost;
        if(random==scissor)return win;
    }else if(option==paper){
        if(random==scissor)return lost;
        if(random=rock)return win;
    }else if(option==scissor){
        if(random==rock)return lost;
        if(random==paper)return win;
    }
};
