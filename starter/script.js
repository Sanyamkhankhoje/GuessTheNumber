'use strict'

let secretNumber = Math.trunc(Math.random()*20) + 1;  
let score = 20;
let highscore = 0;

function showMessage(message) {
    document.querySelector('.message').textContent = message;
}

function resetScreen() {
    score = 20;
        secretNumber = Math.trunc(Math.random()*20) + 1;
        
        showMessage("Start guessing 😈");
        document.querySelector('.score').textContent = score;

        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = ''; 

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
}

function correctNumberShenanigans(secretNumber, score, highscore) {
    showMessage("🥵 Correct Number!");
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}

document.querySelector('.check').addEventListener('click', function(){ 
    const guess = Number(document.querySelector('.guess').value); 
    if (!guess) { 
        showMessage("🥲 No Number!");
    } else if (guess === secretNumber) {
        correctNumberShenanigans(secretNumber, score, highscore);
    } else if (guess !== secretNumber) {
        if (score >  0) {
            if (guess > secretNumber) {
                showMessage("🤫 Too High!");
            } else if (guess < secretNumber) {
                showMessage("😱 Too low");
            }
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            showMessage("🤬 You lost the game ");
            document.querySelector('.score').textContent = 0;
        }     
    } 
})

document.querySelector('.again').addEventListener(
    'click', function() {
        resetScreen();   
    }
)