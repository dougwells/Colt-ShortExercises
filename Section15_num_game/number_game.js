var reset = document.querySelector("#reset");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var input = document.querySelector("input");
var winScore = document.getElementById("winScore");
var maxScore = Number(input.value);
var h1 = document.querySelector("h1");
var player1Score	= 0;
var player2Score	= 0;
var versus = "0 to 0"
var gameOn = true;


reset.addEventListener('click', function(e){
	maxScore = Number(input.value);
	player1Score = 0;
	player2Score = 0;
	winScore.textContent="Playing to " + maxScore;
	h1.style.color = "black";
	h1.textContent="0 to 0";
	gameOn = true;
	e.preventDefault();
	
});
	
player1.addEventListener('click', function(e){
		if(gameOn){
			player1Score=player1Score+1;
			versus = player1Score + " to " + player2Score;
			h1.textContent = versus;
		}
	
		if(player1Score===maxScore){
			h1.style.color="red";
			gameOn = false;
		}	
	
		e.preventDefault();
	
});

player2.addEventListener('click', function(e){
		if(gameOn){
			player2Score=player2Score+1;
			versus = player1Score + " to " + player2Score;
			h1.textContent = versus;
		}
	
		if(player2Score===maxScore){
			h1.style.color="red";
			gameOn = false;
		}	
	
		e.preventDefault();
	
});
	
