# Project related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

[MY CODE] (https://stackblitz.com/edit/stackblitz-starters-gsksvu?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)


``` javascript
//console.log("SONAL GHINAIYA")
```

# Project related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

[MY CODE] (https://stackblitz.com/edit/stackblitz-starters-gsksvu?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)
# Solution code
``` javascript
//console.log("SONAL GHINAIYA")
```

## Project 1
```javascript
//console.log("Sonal Ghinaiya")
const buttons = document.querySelectorAll('.button');
//console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
        //body.style.backgroundColor = 'grey'
        body.style.backgroundColor = e.target.id
    }

    if(e.target.id === 'white'){
        body.style.backgroundColor = 'white'
    }

    if(e.target.id === 'blue'){
        body.style.backgroundColor = 'blue'
    }

    if(e.target.id === 'yellow'){
        body.style.backgroundColor = 'yellow'
    }

    if(e.target.id === 'purple'){
        body.style.backgroundColor = 'purple'
    }
  })
});
```
## Project 2

```javascript
const form = document.querySelector('form')
//this usecase give you empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.defaultPrevented()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
    }

})
```
## Project 3

```javascript
const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    //console.log(date.toLocaleTimeString());
}, 1000)
```
## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#subt")

const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //validation value between 1 to 100
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number greater than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over.Random Number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //equal random number low or high
    if(guess === randomNumber){
        displayMessage(`You Guessed it right`);
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is TOOO high`);
    }
}

function displayGuess(guess){
    //clean values and array update and remaining guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    //low or high message print
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //game end 
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    //new game start
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess=[]
        numGuess= 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame=true
    })
}

```