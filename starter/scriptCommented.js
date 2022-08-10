'use strict'

let secretNumber = Math.trunc(Math.random()*20) + 1; // generating the secret number, math.random gives a random decimal no. between 0 and 1. 

//each time we get a wrong number, we decrease the score by 1. Initial score is 20. 
let score = 20;
let highscore = 0;


//create a function to show messages from message class
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

document.querySelector('.check').addEventListener('click', function(){ // addEventListener listens to event happening on the page, 1st parameter is the event happening on the page and second is the function that defines what happens after the happening of that event. 
    const guess = Number(document.querySelector('.guess').value); // using fucntion as a statement, not as an expression. Also, default input type is string. 
    if (!guess) { //whenever there is any input taking involved, always first check that what happens when there is not input. 
        showMessage("🥲 No Number!");
    } else if (guess === secretNumber) {
        showMessage("🥵 Correct Number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
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

// Adding the again functionality to restore everything back to its previous state. 
document.querySelector('.again').addEventListener(
    'click', function() {
        resetScreen();   
    }
)