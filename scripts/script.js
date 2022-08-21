// create function that randomly returns either 'rock', 'paper', or 'scissors' as computer choice.
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random === 1 ) {
        return 'Rock';
    } else if (random === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 0;
// create a function that plays a round. It takes both the comp choice and the user choice as paramaters then returns a string declating the winner.
function playRound(playerSelection, computerSelection) {
    // Computer selection
    computerSelection = getComputerChoice().toLowerCase();
    // create a function that prompts the user to select 'rock', 'paper', or 'scissors'. Player selection is case-insensitive.
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    if (computerSelection === playerSelection) {
        round++
        return `
            Computer: ${computerSelection}
              Player: ${playerSelection}
              Result: Tie!
               Score: Computer: ${computerScore}
                        Player: ${playerScore}
                         Round: ${round}/5
        `;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper') {
        round++
        computerScore++
        return `
            Computer: ${computerSelection}
              Player: ${playerSelection}
              Result: You Lose! ${computerSelection} beats ${playerSelection}.
               Score: Computer: ${computerScore}
                        Player: ${playerScore}
                         Round: ${round}/5         
        `;
    } else {
        round++
        playerScore++
        return `
            Computer: ${computerSelection}
              Player: ${playerSelection}
              Result: You Win! ${playerSelection} beats ${computerSelection}.
               Score: Computer: ${computerScore}
                        Player: ${playerScore}
                         Round: ${round}/5
        `;
    }
}
// console.log(playRound(playerSelection, computerSelection));
// write a new function that plays 5 rounds, keeps score and reports the winner at the end
function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5) {
            console.log(playRound(playerSelection, computerSelection));
        }
    }
}
// Execute game function and console.log the results of each round
console.log(game());