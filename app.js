/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundScore,dice,activePlayer;
score=[0,0,0];
roundScore=0;
activePlayer=1;

document.querySelector(".dice").style.display="none";
document.getElementById("scoreid1").textContent='0';
document.getElementById("scoreid2").textContent='0';
//dice=Math.floor(Math.random()*6)+1;  // used to find the random no.
//document.querySelector("#current-score1id").textContent=dice;

 

document.querySelector(".btn-roll").addEventListener("click",function(){
     var dice=Math.floor(Math.random()*6)+1; 
     var dicedom=document.querySelector(".dice");
     dicedom.style.display="block";
     dicedom.src="dice-"+dice+".png";
     
     if(dice!=1)
     {
          document.querySelector(".changing"+activePlayer).style.backgroundColor="green";

          roundScore+=dice;
         
          document.querySelector(".current-score"+activePlayer).textContent=roundScore;
     }
     else
     {
          document.querySelector(".changing"+activePlayer).style.backgroundColor="red";

          nextplayer();
          /*
          activePlayer ===1 ? activePlayer=2:activePlayer=1;
          roundScore=0;
          document.querySelector(".current-score1").textContent='0';

          document.querySelector(".current-score2").textContent='0';
          document.querySelector(".dice").style.display="none";*/
     }

});

document.querySelector(".btn-hold").addEventListener("click",function(){
   //  adding score to the array
     score[activePlayer]+=roundScore;
     // addd text to ui
     document.querySelector("#scoreid"+activePlayer).textContent=score[activePlayer];
     if(score[activePlayer]>=30)
     {   
          document.querySelector(".player"+activePlayer).textContent="Winner"; 
          document.querySelector(".player"+activePlayer).style.color="green"; 
          alert("Player"+activePlayer+" wins this round");
          score=[0,0,0];
          document.querySelector("#scoreid1").textContent='0';
          document.querySelector("#scoreid2").textContent='0';
     }
     // changing state of the player
   nextplayer();
   //  score[activePlayer]>100 ? 

});

function nextplayer(){
     roundScore=0;
     if(roundScore==0)
     {
          document.querySelector(".changing"+activePlayer).style.backgroundColor="red";
     }
     activePlayer ===1 ? activePlayer=2:activePlayer=1;
     

      document.querySelector(".current-score1").textContent='0';

          document.querySelector(".current-score2").textContent='0';
          document.querySelector(".dice").style.display="none";  
          
}
/*function win()
{
     if(score[activePlayer]>=10)
     {

          document.querySelector("#scoreid"+activePlayer).textContent=score[activePlayer];
          alert("player" + activePlayer+" wins the game");
         

        
     }
}*/
