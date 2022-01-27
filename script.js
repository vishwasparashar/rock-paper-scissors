'use strict'
 

let cmpValue;
let userValue;
let score1=0;
let score2=0;

function result() {
     while (score1<10 && score2<10) {

        if(userValue==='stone'&&cmpValue==='stone'){
            document.querySelector('.result').textContent='game tied';
            break;
        }else if (userValue==='stone'&&cmpValue==='scissor') {
            document.querySelector('.result').textContent='you win';
            score1 ++;
            document.querySelector(".score-1").textContent=`player:${score1}`
            break;
        }else if (userValue==='stone'&&cmpValue==='paper') {
            document.querySelector('.result').textContent="computer wins";
            score2 ++;
            document.querySelector(".score-2").textContent=`computer:${score2}`
            break;
        }
        
        else if (userValue==='paper'&&cmpValue==='paper') {
            document.querySelector('.result').textContent='game tied';
            break;
        }else if (userValue==='paper'&&cmpValue==='stone') {
            document.querySelector('.result').textContent='you win';
            score1 ++;
            document.querySelector(".score-1").textContent=`player:${score1}`
            break;
        }else if(userValue==='paper'&&cmpValue==='scissor') {
            document.querySelector('.result').textContent='computer wins';
            score2 ++;
            document.querySelector(".score-2").textContent=`computer:${score2}`
            break;
        }
        
        else if (userValue==='scissor'&&cmpValue==='scissor') {
            document.querySelector('.result').textContent="game tied";
            break;
        }else if (userValue==='scissor'&&cmpValue==='paper') {
            document.querySelector('.result').textContent='you win';
            score1 ++;
            document.querySelector(".score-1").textContent=`player:${score1}`
            break;
        }else if(userValue==='scissor'&&cmpValue==='stone'){
            document.querySelector('.result').textContent='computer wins'; 
            score2 ++;
            document.querySelector(".score-2").textContent=`computer:${score2}`
            break;
        };
         
     }
    
     if (score1===10) {
        document.querySelector(".meme").setAttribute("src","./images/happy.gif");
        document.querySelector(".game-container").style.display="none"
         
     }
     if(score2===10){
         console.log('ai will take over the world get ready');
         document.querySelector(".meme").setAttribute("src","./images/robo.gif")
         document.querySelector(".game-container").style.display="none"
     }
    
};
let btns=document.querySelectorAll(".btn");
 
btns.forEach(btn => {

    btn.addEventListener("click",function() {
        const compChoice=Math.trunc(Math.random()*3);
        if (compChoice===0) {
            document.querySelector('.computer-img').setAttribute("src","./images/scissors.png");
            cmpValue='scissor'
            
        }else if (compChoice===1) {

             document.querySelector('.computer-img').setAttribute("src","./images/paper.png");
             cmpValue='paper'
        }else if(compChoice===2){
            document.querySelector('.computer-img').setAttribute("src","./images/stone.png");
            cmpValue='stone'
        }

        
    });
    
});
document.querySelector(".btn-rock").addEventListener('click',function() {
    document.querySelector('.user-img').setAttribute("src","./images/stone.png");
    userValue='stone';
    result();

});
document.querySelector(".btn-paper").addEventListener('click',function() {
    document.querySelector('.user-img').setAttribute("src","./images/paper.png");
    userValue='paper';
    result();
});
document.querySelector(".btn-scissors").addEventListener('click',function() {
    document.querySelector('.user-img').setAttribute("src","./images/scissors.png");
    userValue='scissor';
    result();
});




 