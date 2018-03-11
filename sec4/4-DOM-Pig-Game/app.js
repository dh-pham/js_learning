/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 20 points on GLOBAL score wins the game

*/


// global variable
// const WIN_SCORE = 50;
const DICE_0_CHANGE = 6;
const DICE_1_CHANGE = 6;
var playerScore = [], curScore;
var activePlayer;  // 0 or 1
var dice;
var isPlaying;
var WIN_SCORE;

// function setPlayerName()
function init() {
	activePlayer = 0;
	playerScore[0] = 0;
	playerScore[1] = 0;
	curScore = 0;
	dice = 1;
	isPlaying = true;
	WIN_SCORE = Math.floor(Math.random() * 11) + 50;
	console.log(WIN_SCORE);

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.querySelector('.player-0-panel').classList.toggle('active', true);
	document.querySelector('.player-1-panel').classList.remove('active', false);

	document.querySelector('.player-0-panel').classList.toggle('winner', false);
	document.querySelector('.player-1-panel').classList.toggle('winner', false);
	document.querySelector('.dice').src = 'dice.png';	
}

// next player
function nextPlayer() {
		activePlayer = (activePlayer === 0) ? 1 : 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
}

//set curScore
function setCurScore(scoreTmp) {
	curScore = scoreTmp;
	document.getElementById('current-' + activePlayer).textContent = scoreTmp;
}

//set playerScore
function setPlayerScore(scoreTmp) {
	playerScore[activePlayer] = scoreTmp;
	document.getElementById('score-' + activePlayer).textContent = scoreTmp;
}

// do winner
function doWinner() {
	document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner', true);
	document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
	isPlaying = false;
}

init();

// add event listener when click roll btn
document.querySelector('.btn-roll').addEventListener('click', function(){
	if (isPlaying === true) {
		// get dice value
		var diceImg = document.querySelector('.dice');
		var dice_rand = Math.floor(Math.random() * 13);
		if (dice_rand === 0) {
			dice = 0;
		} else {
			dice = (dice_rand % 6 === 0) ? 6 : dice_rand % 6;
		}
		// console.log(dice);
		diceImg.src = 'dice-' + dice + '.png';
		// if dice === 0  : player score -10, another + 10
		if(dice === 0) {
			setCurScore(0);

			setPlayerScore(playerScore[activePlayer] - DICE_0_CHANGE);

			nextPlayer();

			setPlayerScore(playerScore[activePlayer] + DICE_0_CHANGE);
			if (playerScore[activePlayer] >= WIN_SCORE) {
				doWinner();
			}

		} else if (dice === 1) { // dice === 1, cur - 10
			setCurScore(0);

			setPlayerScore(playerScore[activePlayer] - DICE_1_CHANGE);

			nextPlayer();

		} else { // if dice !== 1, 0
			setCurScore(curScore + dice);
		}
	}
});

// add event listener when click hold btn
document.querySelector('.btn-hold').addEventListener('click', function(){
	if (isPlaying === true) {
		// add current score to total score
		setPlayerScore(playerScore[activePlayer] + curScore);
		// reset curScore
		setCurScore(0);
		// get winner
		if (playerScore[activePlayer] >= WIN_SCORE) {
			doWinner();
		} else {
			nextPlayer();
		}
	}
	
});

// new game listener
document.querySelector('.btn-new').addEventListener('click', function() {
	init();
});




