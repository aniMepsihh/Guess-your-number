const yesBtn = document.querySelector('#yesBtn')
const moreBtn = document.querySelector('#moreBtn')
const lessBtn = document.querySelector('#lessBtn')
const startBtn = document.querySelector('#startBtn')
const message = document.querySelector('#message')
const attemptsDisplay = document.querySelector('#attempts')

let maxLimit = 0
let minLimit = 0
let number = 0


function startGame() {
    maxLimit = 100
    minLimit = 0
    number = 50
    message.textContent = `Твое число ${number}? Если нет, то твое число больше или меньше?`
    attempts = 1
    attemptsDisplay.textContent = `Попытки: ${attempts}`
    yesBtn.style.display = ''
    moreBtn.style.display = ''
    lessBtn.style.display = ''
    startBtn.style.display = 'none'
    
}

function textAndAttempts (){
    message.textContent = `Твое число ${number}? Если нет, то твое число больше или меньше?`
    attempts ++
    attemptsDisplay.textContent = `Попытки: ${attempts}`
}

function equation (){
    number = Math.floor(minLimit+((maxLimit-minLimit)/2))
}

function numberIfLess(){
    maxLimit = number
    equation()
    textAndAttempts()

}

function numberIfMore(){
    minLimit = number
    equation()
    textAndAttempts()
}    

function guessedRight(){
    message.textContent = 'Ура, у меня получилось!'
    attempts = 0
    attemptsDisplay.textContent = `Попытки: ${attempts}`
    yesBtn.style.display = 'none'
    moreBtn.style.display = 'none'
    lessBtn.style.display = 'none'
    startBtn.style.display = ''
}

lessBtn.addEventListener('click', numberIfLess)
moreBtn.addEventListener('click', numberIfMore)
startBtn.addEventListener('click', startGame)
yesBtn.addEventListener('click', guessedRight)

