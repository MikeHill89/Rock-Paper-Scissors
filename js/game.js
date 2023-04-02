const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard');
const results = document.querySelector('.results');
const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const gameOverDiv = document.querySelector('.gameover');
let playerScore = 0;
let cpuScore = 0;

buttons.forEach(button => button.addEventListener('click', playRound));

function playRound() {
  console.log('New round started!');
  clearResults();
  const playerSelection = this.id;
  const player = playerChoice(playerSelection);
  const cpu = cpuChoice();
  let createResult = document.createElement('h4');
  createResult.classList.add('roundresult');
  createResult.textContent = "";
    if (player === cpu) {
      createResult.textContent = "The round is a tie!";
    } else if (
      (player === "rock" && cpu === "scissors") ||
      (player === "paper" && cpu === "rock") ||
      (player === "scissors" && cpu === "paper")
    ) {
      createResult.textContent = "You won this round!";
      ++playerScore;
    } else {
      createResult.textContent = "You lost this round!";
      ++cpuScore;
    }
  results.appendChild(createResult);
  updateScore();
}

function playerChoice(weapon){
  const playerChoice = document.createElement('div');
  playerChoice.classList.add('playerchoice');
  playerChoice.textContent = `Player chose ${weapon}`;
  results.appendChild(playerChoice);
  return weapon;
}

function cpuChoice() {
  const weapons = ['rock', 'paper', 'scissors'];
  const randomWeapon = Math.floor(Math.random() * weapons.length); //generates a randum number between 0 and the length of the weapons array.
  const cpuWeapon = weapons[randomWeapon]; //uses the randomWeapon return integer value as an index for weapons variable expression then returns it to var selectedWeapon
  const cpuChoice = document.createElement('div');
  cpuChoice.classList.add('cpuchoice');
  cpuChoice.textContent = `CPU chose ${cpuWeapon}`;
  results.appendChild(cpuChoice);
  return cpuWeapon;
}

function clearResults(){
  results.replaceChildren();
  gameOverDiv.setAttribute('hidden', 'hidden');
  gameOverDiv.style.display = 'none';
}

function updateScore(){
  scoreboard.replaceChildren();
  const showPlayerScore = document.createElement('div');
  const showCpuScore = document.createElement('div');
  showPlayerScore.classList.add('playerscore');
  showPlayerScore.textContent = `Player score = ${playerScore}`;

  showCpuScore.classList.add('cpuscore');
  showCpuScore.textContent = `CPU score = ${cpuScore}`;

  scoreboard.appendChild(showPlayerScore);
  scoreboard.appendChild(showCpuScore);

  if (playerScore === 5 || cpuScore === 5) {
    //console.log("game is over bra");
    //buttons.forEach(button => button.setAttribute('disabled', 'true'));
    container.setAttribute('hidden', 'hidden');
    container.style.display = 'none';
    showWinner();
    
  }
}

function showWinner(){
  const resetButton = document.getElementById('reset');
  const showResult = document.getElementById('endresult');
  gameOverDiv.removeAttribute('hidden', 'hidden');
  gameOverDiv.style.display = '';
  if (playerScore === 5) {
    showResult.textContent = `You won! Player ${playerScore} | CPU ${cpuScore} `;
  } else {
    showResult.textContent = `You lost.... CPU ${cpuScore} | Player ${playerScore}`;
  }
  resetButton.addEventListener("click", resetGame);
}

const resetGame = () => {
  container.removeAttribute('hidden', 'hidden');
  container.style.display = '';
  playerScore = 0;
  cpuScore = 0;
  clearResults();
  updateScore();
}

