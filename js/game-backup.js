//Decided to start from scratch again to incorporate the for loop alghoritm.

//write a variable named maxRounds.
let maxRounds = 0;
//write a variable named playerScore and set its initial value to 0
let playerScore = 0;
//write variables named computerScore and set its initial value to 0.
let computerScore = 0;
/*write a function named computerSelection that picks randomly between rock, paper and scissors and returns the value*/
function computerSelection(){
  const weapons = ['rock','paper','scissors'];
  const randomWeapon = Math.floor(Math.random() * weapons.length); //generates a randum number between 0 and the length of the weapons array.
  const selectedWeapon = weapons[randomWeapon]; //uses the randomWeapon return integer value as an index for weapons variable expression then returns it to var selectedWeapon.
  console.log(selectedWeapon); //logs the chosen weapon by the computer in the console.
  alert(`Computer chose ${selectedWeapon[0].toUpperCase() + selectedWeapon.substring(1)}`); //display alert computer weapon with weapon's first letter capitalized.
  return selectedWeapon // returns the selectedWeapon as the value for computerSelection function call.
}
/*write a function called playerInput() that prompts the player to provide an input of either rock,paper or scissors. 
If the input is not rock,paper or scissors, display an error message and prompt again. 
If the input is rock,paper or scissors then return the value lowercase.*/
function playerInput() {
  let input = prompt("Rock, Paper or Scissors?"); // displays a prompt to the player to input Rock, Paper or Scissors
  input = input.toLowerCase(); // changes the playerInput value to lowercase for validation purposes.

  //checks if the input is strictly equal to rock, paper or scissors.
  if (input === "rock" || input === "paper" || input === "scissors") {
    alert(`You chose ${input[0].toUpperCase() + input.substring(1)}`) // alerts the player of their choice of weapon. First letter of weapon capitalized.
    return input;
    //else if the input is blank or null displays a message to the user and calls the playerInput function again to prompt for a new input.
  } else if (input === "" || input === null) {
    alert("Can not be blank. Please type Rock,Paper or Scissors");
    return playerInput();
    // else if the input is still different prompts the user to write rock, paper or scissors and calls the playerInput for prompt again.
  } else {
    alert("Sorry, you need to write rock, paper or scissors");
    return playerInput();
  }
}
/*write a function declaration called startRound() 
It should call the playerInput function to obtain the player’s value and store it in a function scope variable
Then call the computerSelection function and store that in a function scope variable.

Then compares the computerSelection scope variable value against the playerSelection scope variable value using the following logic.

If playerSelection equals computerSelection then return a message saying It’s a tie!
Subtract 1 from the gameScore variable and return.

If playerSelection is rock and computerSelection is scissors OR if playerSelection is paper and computerSelection is rock OR if playerSelection is scissors and computerSelection is paper then output a message that the player won.
Add a point to the playerScore and Subtract 1 from the gameScore variable and return.

If playerSelection is rock and computerSelection is Paper OR if playerSelection is paper and computerSelection is scissors OR if playerSelection is scissors and computerSelection is rock then output a message that the player lost.
Add a point to the computerScore and Subtract 1 from the gameScore variable and return. */
function startRound() {
  const player = playerInput();
  const computer = computerSelection();
  const match = `Player chose ${player} and computer chose ${computer}.`;

  console.log(match);

    if (player === computer) {
      alert("The round is a tie!");
      alert(`Game Score is now: Player ${playerScore} vs Computer ${computerScore}`);
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      alert("The player won this round!");
      ++playerScore;
      alert(`Game Score is now: Player ${playerScore} vs Computer ${computerScore}`);
    } else {
      alert("The player lost this round!");
      ++computerScore;
      alert(`Game Score is now: Player ${playerScore} vs Computer ${computerScore}`);
    }
  }
//write a forloop that calls startRound() 5x
for (let i = 1; i <= maxRounds; i++){
  console.log(`This is round ${i}`);
//    startRound();
}

/*write a function showWinner that runs when gameScore = 0. The function compares playerScore versus computerScore and shows a message based on the following conditions.
If playerScore === computerScore. Display It’s a tie! - another bonus round should be played to determine the winner.
If playerScore >= computerScore. Display The player wins the game!
If playerScore <= computerScore. Display The player loses the game 
*/
function determineWinner (){
  alert(`The final score is Player ${playerScore} vs Computer ${computerScore}`);
  if (playerScore === computerScore) {
    alert("The game is a tie! We must play another round to determine the winner!");
    startRound()
  } else if (playerScore > computerScore){
    alert("Player won the game!");
  } else {
    alert("Computer won the game!");
  }
}
//determineWinner();
//write a function that resets the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  //alert("The game has been reset!");
  //startRound();
}

resetGame();

