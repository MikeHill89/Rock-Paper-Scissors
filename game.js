let gameScore = 5; // sets the amount of games by default to 5
let playerScore = 0; // variable that can store the points when a player wins a round. 
let computerScore = 0; // varaible that can store the points when the computer wins a round.

// function that can be called to show who's the winner of rock paper scissors
function showWinner(){
	if (playerScore > computerScore){
		console.log(`You won!`);
	} else if (playerScore === computerScore){
		console.log(`It's a tie!`); // FIX HERE TO PLAY AN ADDITIONAL ROUND TO DETERMINE WINNER. 
	} else {
		console.log(`You lost!`);
	}
}

// functions generates a random number between 0 and 2 including 0 and 2. Then selects that number from the array and returns it.
function computerSelection(){
	const weapons = ["rock","paper","scissors"];
	const randomWeapon = Math.floor(Math.random() * (weapons.length));//generates a randum number between 0 and 2
	const pickedWeapon = weapons[randomWeapon]; //selects a randomWeapon from the array using the number as position 
	return pickedWeapon; //returns the pickedWeapon as value
}

// prompts the user for an input and then validates the input to be rock,paper or scissors. If the input is valid returns it value.
function playerInput(){
	let input = prompt('Rock, Paper or Scissors?');
	input = input.toLowerCase();

	if (input === 'rock' || input === 'paper' || input === 'scissors'){
		return input;
	} else if (input === "" || input === null){
		console.log('Can not be blank. Please type Rock,Paper or Scissors');
		return playerInput();
	} else{
		console.log("Sorry, you need to write rock, paper or scissors");
		return playerInput();
	}
}


//usfd in playRound() to console log the score after a round is played
function showScore(){
	const scoreMessage = `Player has ${playerScore}. Computer score = ${computerScore}`;
	console.log(scoreMessage);
}
// function that can be called to reset the player, computer to 0 and game score to 5. Log's a message and plays another round.
function resetGame(){
	gameScore = 5;
	playerScore = 0;
	computerScore = 0;
	console.info("Let's go again.");
	playRound();
}

//used in playRound to display the amount of games left. If 5 games are played shows the winner and calls the resetGame function
function showGamesLeft(){
	if (gameScore === 1){
		const showLastGame = 'Last game left!';
		console.warn(showLastGame);
		playRound();
	} else if (gameScore > 1){
		const showGamesLeft = `${gameScore} games left.`;
		console.info(showGamesLeft);
		playRound();
	} else {
		showWinner();
		resetGame();
	}
}

//used in playRound() to show a message when the player wins the round. Adds a point to the player score and deducts the gamescore by 1
function playerWinsRound(){
	const winMessage = 'Player scored a point!';
	console.info(winMessage);
		++playerScore
		--gameScore
}

//used in playRound() to show a message when the player loses the round. Adds a point to the computerScore and deducts the gamescore by 1
function playerLosesRound(){
	const loseMessage = 'Computer scored a point!';
	console.info(loseMessage);
		++computerScore
		--gameScore
}
//used in playRound() to display a message when it's a tie. Deducts the gamescore by 1.
function roundIsaTie(){
	const tieMessage = "It's a tie!";
	console.warn(tieMessage);
	--gameScore
}

/*write a function declaration called playRound() 
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
function playRound(){
	const computer = computerSelection();
	const player = playerInput();
	const match = `Player chose ${player} and computer chose ${computer}.`;
	console.log(match);
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
playRound();
