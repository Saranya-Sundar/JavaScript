'use strict';
// game setting up a random number as a number to guess
let randNum = Math.trunc(Math.random() * 20 + 1);

// global constants for dom elements
const messageBox = document.querySelector('.message');
const guessTxt = document.querySelector('.guess');
const scoreBox = document.querySelector('.score');

// setting the initial score
let score = 20;
let highScore = 0;
let guess = Number(guessTxt.value);

// initialize and play again button's functionality, starts a fresh game each time it is called
let init = function () {
  randNum = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  guess = 0;
  scoreBox.textContent = score;
  messageBox.textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  guessTxt.value = '';
  document.querySelector('.check').disabled = false;
};
init();

//user enters a number and clicks the check button, the following function has the bulk of the game logic
let check = function () {
  guess = Number(guessTxt.value);
  if (score > 0) {
    if (!guess) {
      messageBox.textContent = '🛑 No Number';
    }
    // correct guess
    else if (randNum === guess) {
      messageBox.textContent = '🎉 Correct Guess';
      document.querySelector('.number').textContent = randNum;
      document.querySelector('body').style.backgroundColor = 'Green';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
      document.querySelector('.check').disabled = true;
    }
    // incorrect guess
    else if (randNum !== guess) {
      messageBox.textContent =
        randNum < guess ? '📈 Guess is high' : '📉 Guess is low';
      --score;
      scoreBox.textContent = score;
    }
  }
  // gameover condition when score reaches 0
  else {
    messageBox.textContent = '😭 You lost the game';
  }
};

//check button to check if the guess is correct
document.querySelector('.check').addEventListener('click', check);

//play again using the 'Again' button
document.querySelector('.again').addEventListener('click', init);
