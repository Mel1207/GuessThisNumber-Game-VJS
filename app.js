'Use strict'
const btnCheck = document.querySelector('.btn-check')
const btnRestart = document.querySelector('.btn-restart')
const numInput = document.querySelector('.input')
const btnInc = document.querySelector('.btn-inc')
const btnDec = document.querySelector('.btn-dec')


// Defining Functions
const checkValue = () => {
    console.log(numInput.value)
}

const addValue = () => {
    let value = numInput.value
    value += 1
}






// Event Listeners
btnCheck.addEventListener('click', checkValue)
btnInc.addEventListener('click', addValue)