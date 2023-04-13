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
let comp_result
let playerSelection
let computerSelection
const optionBtn = document.querySelectorAll('.optionBtn')

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice)})

function getPlayerChoice(e) {
    let playerSelection = (e.target.classList.value);
    playRound(playerSelection);
}

function playRound(playerSelection) {
    //playerChoice = prompt("What is your choice", "Rock");
    console.log(playerSelection);
    //playerSelection = capitalize(playerChoice);
    //playerSelection = "Rock";
    comp_result = gameChoices[getRandomInt(3)].choice;
    computerSelection = comp_result;
    /*console.log(playerSelection)
    console.log(computerSelection)*/
    console.log(computerSelection);
    if (playerSelection === computerSelection)
    {
        console.log("Tie game")
        updateScore (playerScore, compScore)
        return "Tie game";
    }
    else if (whoWins(playerSelection, computerSelection))
    {
        playerScore++;
        console.log("Player wins")
        updateScore (playerScore, compScore)
        return "Player wins";
    }
    else if (whoWins(computerSelection, playerSelection))
    {
        compScore++;
        console.log("Computer wins")
        updateScore (playerScore, compScore);
        return "Computer wins";
    }
    else
        return "There is an error"
}

function updateScore (playerScore, compScore) {
    console.log("Score : Player %d / Computer %d", playerScore, compScore)
    if (playerScore > compScore)
        console.log("Player is a winner")
    else if (compScore > playerScore)
        console.log("Computer is a winner")
    else
        console.log("Tie game")
}


/*console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))*/