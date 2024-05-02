// Get Computer Choice 
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
        return 'Scissors'
    }
}
console.log(getComputerChoice())

// Get Human Choice 
function getHumanChoice() {
    let userPrompt = prompt('Rock, Paper or Scissors?');
    if(userPrompt === 'rock') {
        return 'Rock'
    } else if(userPrompt === 'paper') {
        return 'Paper'
    } else if (userPrompt === 'scissors') {
        return 'Scissors'
    }
}
console.log(getHumanChoice())
