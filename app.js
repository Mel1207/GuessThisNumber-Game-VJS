'Use strict'
const btnCheck = document.querySelector('.btn-check')
const btnRestart = document.querySelector('.btn-restart')
const numInput = document.getElementById('input')
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






// Event Listeners
btnCheck.addEventListener('click', checkValue)
btnInc.addEventListener('click', incValue)
btnDec.addEventListener('click', decValue)