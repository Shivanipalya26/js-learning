let randomNo = parseInt(Math.random() * 100 + 1)

const userInput = document.querySelector("#guessField") 
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrhi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess < 1 && guess > 100){
        alert("Please enter number greater than 1 and less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 9) {
            displayGuess(guess)
            displayMessage(`Game over. Random Number was ${randomNo}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNo){
        displayMessage(`HURRAY!!! You guessed it right`)
        endGame()
    }
    else if(guess < randomNo) {
        displayMessage(`You guessed it TOO LOW`)
    }
    else if(guess > randomNo) {
        displayMessage(`You guessed it TOO HIGH`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    startGame()

}

function startGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click', function(e) {
        userInput.value = ''
        prevGuess = []
        numGuess = 0
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`

        playGame = true
    })
}
