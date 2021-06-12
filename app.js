'Use strict'
const btnCheck = document.querySelector('.btn-check')
const btnRestart = document.querySelector('.btn-restart')
const numInput = document.getElementById('input')
const numberDisplay = document.querySelector('.number')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')


// Defining Functions
const checkValue = () => {
    console.log(numInput.value)
}

const incValue = () => {
    numInput.stepUp();
}

const decValue = () => {
    numInput.stepDown();
}


// create a random number
const random = Math.trunc(Math.random() * 20 + 1)
numberDisplay.textContent = random



// Event Listeners
btnCheck.addEventListener('click', checkValue)
btnInc.addEventListener('click', incValue)
btnDec.addEventListener('click', decValue)