'Use strict'
const btnCheck = document.querySelector('.btn-check')
const btnRestart = document.querySelector('.btn-restart')
const numInput = document.getElementById('input')
const numberDisplay = document.querySelector('.number')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')
const currentScoreEl = document.querySelector('.current-score')
const highestScoreEl = document.querySelector('.highest-score')

let currentScore = 20;

// display message function
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

// wrong guess function
const wrongGuess = () => {
    currentScore -= 1 
    currentScoreEl.textContent = currentScore
}

// create a random number
const random = Math.trunc(Math.random() * 20 + 1)
numberDisplay.textContent = random


// Defining Functions
const checkValue = () => {

    const guess = Number(numInput.value)

    if(!guess) {
        displayMessage('No number 🤷‍♂️')

    } else if (guess === random) {
        displayMessage('Correct 😍')
        // numberDisplay.textContent = random
        highestScoreEl.textContent = currentScore

    } else if (guess > random) {
        displayMessage('To high buddy! 🤣')
        wrongGuess()

    } else if (guess < random) {
        displayMessage('Too low buddy! 😣')
        wrongGuess()
    }
}

const incValue = () => {
    numInput.stepUp();
}

const decValue = () => {
    numInput.stepDown();
}


// Event Listeners
btnCheck.addEventListener('click', checkValue)
btnInc.addEventListener('click', incValue)
btnDec.addEventListener('click', decValue)