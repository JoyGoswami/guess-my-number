'use strict';

//BUTTON selection
let againBtn = document.querySelector(".again")
let chechBtn = document.querySelector(".check")

//Selecting other elements
let guessInputEl = document.querySelector(".guess")
let messageEl = document.querySelector(".message")
let scoreEl = document.querySelector(".score")
let highScoreEl = document.querySelector(".highscore")
let secretNumberEl = document.querySelector(".number")

//FUNCTIONS
const displayMessage = function (message){
    messageEl.textContent = message
}
//returns a random number between 1 and 20
const secretRandomNumber = () => Math.trunc(Math.random()*20) + 1;
//decrease the score on wrong guess
const decreaseScore = () => {
    score--
    scoreEl.textContent = score
}

//state
let secretNumber = secretRandomNumber()
let score = 20;
let highscore = 0;


//EventListener handle functions
const handleCheck = () => {
    const guess = Number(guessInputEl.value);
    //when there is no input
    if(!guess){
        displayMessage("⛔️ No number!")
        console.log(guess, typeof guess)
    } 
    //when the guess is correct
    else if(guess === secretNumber){
        displayMessage('🎉 Correct Number!')
        secretNumberEl.textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){
            highscore = score
            highScoreEl.textContent = highscore
        }
    } 
    //when the guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            decreaseScore()
        } else {
            displayMessage('💥 You lost the game!');
            scoreEl.textContent = 0;

        }
    }
}
const handleAgain = () =>{
    score = 20
    secretNumber = secretRandomNumber()

    displayMessage("Start guessing...")
    scoreEl.textContent = score;
    secretNumberEl.textContent = "?";
    guessInputEl.value = "";

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

//add eventlisteners
chechBtn.addEventListener("click", handleCheck)
againBtn.addEventListener("click", handleAgain)