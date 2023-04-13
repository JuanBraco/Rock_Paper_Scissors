function capitalize(str) {
    let a = str.slice(0, 1)
    a = a.toUpperCase()
    str = str.substr(1)
    let str2 = str.toLowerCase();
    let r = a.concat("", str2)
        return r
}

function whoWins(player1, player2) {
    if ((player1 === "Paper" && player2 === "Rock")
    || (player1 === "Scissors" && player2 === "Paper")
    || (player1 === "Rock" && player2 === "Scissors"))
        return 1
    else
        return 0
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let gameChoices = [{choice: "Rock", value: 0}, {choice: "Paper", value: 1}, {choice: "Scissors", value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;
let start = 0;
let nbPlay = 0;
let finish = 0;
let playerSelection
let computerSelection
const optionBtn = document.querySelectorAll('.optionBtn')

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice)})

function getPlayerChoice(e) {
    let playerSelection = (e.target.classList.value);
    playRound(playerSelection);
}

function playRound(playerSelection) {
    if (finish === 1) {
        playerScore = 0;
        compScore = 0;
        finish = 0;
    }
    comp_result = gameChoices[getRandomInt(3)].choice;
    computerSelection = comp_result;

    if (playerSelection === computerSelection)
    {
        const result = document.querySelector('p');
        result.textContent = 'Tie Game ';
    }
    else if (whoWins(playerSelection, computerSelection))
    {
        playerScore++;
        const result = document.querySelector('p');
        result.textContent = 'Player wins ';
    }
    else if (whoWins(computerSelection, playerSelection))
    {
        compScore++;
        const result = document.querySelector('p');
        result.textContent = 'Computer wins ';
    }
    else
        return "There is an error"
    scorePlayer.textContent = `${playerScore}`;
    scoreComputer.textContent = `${compScore}`;
    nbPlay++;

    if (nbPlay === 5)
        displayScore(playerScore, compScore);
}

function displayScore (playerScore, compScore) {
    const resultFinal = document.querySelector('p');
    if (playerScore > compScore)
        resultFinal.textContent = "Player is a winner"
    else if (compScore > playerScore)
        resultFinal.textContent = "Computer is a winner"
    else
        resultFinal.textContent = "Final tie game"
    finish = 1;
}


/*console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))*/