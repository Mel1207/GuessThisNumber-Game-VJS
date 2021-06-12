'Use strict'
const btnCheck = document.querySelector('.btn-check')
const btnRestart = document.querySelector('.btn-restart')
const numInput = document.getElementById('input')
const numberDisplay = document.querySelector('.number')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const currentScoreEl = document.querySelector('.current-score')
const highestScoreEl = document.querySelector('.highest-score')
const overlayWin = document.querySelector('.overlay-win')

let currentScore = 20;

// display message function
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

// wrong guess function
const wrongGuess = () => {
    currentScore -= 1 
    currentScoreEl.textContent = currentScore

    if(currentScore < 1) {
        displayMessage('GAME OVER')
    }
}

// create a random number
let random = Math.trunc(Math.random() * 20) + 1

// Inc - Dec Functions
const incValue = () => {
    numInput.stepUp();
}

const decValue = () => {
    numInput.stepDown();
}

// Defining Functions
const checkValue = () => {

    const guess = Number(numInput.value)

    if(!guess) {
        displayMessage('No number 🤷‍♂️')

    } else if (guess === random) {
        displayMessage('Correct 😍')
        numberDisplay.textContent = random
        if(currentScore > highestScoreEl.textContent) {
            highestScoreEl.textContent = currentScore
        }

        overlayWin.style.display = 'block'

        // highestScoreEl.textContent = currentScore

    } else if (guess > random) {
        displayMessage('To high buddy! 🤣')
        wrongGuess()

    } else if (guess < random) {
        displayMessage('Too low buddy! 😣')
        wrongGuess()
    }
}

const restartGame = () => {
    random = Math.trunc(Math.random() * 20) + 1
    numberDisplay.textContent = '?'
    currentScore = 20
    currentScoreEl.textContent = currentScore
    numInput.value = ''
    displayMessage('Start Guessing . . .')
    overlayWin.style.display = 'none'
}


// Event Listeners
btnCheck.addEventListener('click', checkValue)
btnInc.addEventListener('click', incValue)
btnDec.addEventListener('click', decValue)
btnRestart.addEventListener('click', restartGame)