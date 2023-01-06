//create a variable named gameScore and set its initial value to 5.
let gameScore = 5;
//write a variable named playerScore and set its initial value to 0
let playerScore = 0;
//write variables named computerScore and set its initial value to 0.
let computerScore = 0;
//write a function named computerSelection that picks randomly between rock, paper and scissors and returns the value

function computerSelection(){
	const weapons = ["rock","paper","scissors"];
	const randomWeapon = Math.floor(Math.random() * (weapons.length));//generates a randum number between 0 and 2
	const pickedWeapon = weapons[randomWeapon]; //selects a randomWeapon from the array using the number as position 
	return pickedWeapon; //returns the pickedWeapon as value
}
/*write a function called playerInput() that prompts the player to provide an input of either rock,paper or scissors. 	
	If the input is not rock,paper or scissors, display an error message and prompt again. 
	If the input is rock,paper or scissors then return the value lowercase.*/
function playerInput(){
	let input = prompt('Rock, Paper or Scissors?');
	input = input.toLowerCase();

	if (input === 'rock' || input === 'paper' || input === 'scissors'){
		return input;
	} else{
		alert("Sorry, you need to write rock, paper or scissors");
		return playerInput();
	}
}

/*write a function declaration called startGame() 
	call the playerInput function to obtain the player’s value and store it in a function scope variable
	call the computerSelection function and store that in a function scope variable.
	compare the computerSelection scope variable value against the playerSelection scope variable value using the following logic.

	If playerSelection equals computerSelection then return a message saying It’s a tie!
	Subtract 1 from the gameScore variable and return.

	If playerSelection is rock and computerSelection is scissors OR if playerSelection is paper and computerSelection is rock 
	OR if playerSelection is scissors and computerSelection is paper then output a message that the player won.
	Add a point to the playerScore and Subtract 1 from the gameScore variable and return.

	If playerSelection is rock and computerSelection is Paper OR if playerSelection is paper and computerSelection is scissors 
	OR if playerSelection is scissors and computerSelection is rock then output a message that the player lost.
	Add a point to the computerScore and Subtract 1 from the gameScore variable and return.*/

//used in startGame()
function showScore(){
	console.log(`Player has ${playerScore}. Computer score = ${computerScore}`);
}

//used in startGame()
function showGamesLeft(){
	if (gameScore === 1){
		console.log('Last game left!');
	} else{
	console.log(`${gameScore} games left.`);
	}
}

//used in startGame()
function playerWinsRound(){
	console.log('Player scored a point!');
		++playerScore
		--gameScore
}

//used in startGame()
function playerLosesRound(){
	console.log('Computer scored a point!');
		++computerScore
		--gameScore
}
//used in startGame()
function roundIsaTie(){
	console.log("It's a tie!");
	--gameScore
}

function startGame(){
	const computer = computerSelection();
	const player = playerInput();
	console.log(`Player chose ${player} and computer chose ${computer}.`)	
	if (player === computer){
		roundIsaTie();
		showScore();
		showGamesLeft();
	} else if (player === 'rock' && computer === 'scissors' || player === 'paper' && computer === 'rock' || player === 'scissors' && computer === 'paper'){
		playerWinsRound();
		showScore();
		showGamesLeft();
	} else {
		playerLosesRound();
		showScore();
		showGamesLeft();
	}
}

//write a function named resetGame() that resets the gameScore value to 5 and calls the startGame() function.
function resetGame(){
	gameScore = 5;
	console.log('The game was reset! Enjoy another 5 rounds!');
	startGame();
}
/*write a while loop that checks while gameScore does not equal 0 start a new Game. 
	if gameScore reaches 0, then compare playerScore versus computerScore to determine the outcome of the game  

	if playerScore === computerScore. Display It’s a tie! 
	if playerScore >= computerScore. Display The player wins the game!
	if playerScore <= computerScore. Display The player loses the game 

	Prompt to restart and call the resetGame() Function.
	If the prompt is cancelled or exited out using the ESC key on the keyboard, display a console log showing a message saying 
	“Thanks for playing!”
*/
while (gameScore >= 1){
	console.log("A new game round started!");
	startGame();
}

// there's a bug here. gameScore reaches 0, calls resetGame() but playerScore and computerScore is also reset and equals.
if (playerScore === computerScore){
	alert(`It's a tie!, ${computerScore} vs ${playerScore}. Restarting Game!`);
	resetGame();
} else if(playerScore >= computerScore){
	alert(`You won the game, ${playerScore} vs ${computerScore}. Restarting Game!`);
	resetGame();
} else {
	alert(`You lost the game. Computer had ${computerScore} vs ${playerScore}. Restarting Game!`);
	resetGame();
}


