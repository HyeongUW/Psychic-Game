var computerChoices = ["a", "b", "c", "d", "e", 
                           "f", "g", "h", "i", "j", 
                           "k", "l", "m", "n", "o", 
                           "p", "q", "r", "s", "t", 
                           "u", "v", "w", "x", "y", "z"];
    
var pastGuesses = [];

var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var userWin = document.getElementById("win-tag");
var userLose = document.getElementById("lose-tag");
var guessLeft = document.getElementById("left-tag");
var prevGuess = document.getElementById("past-tag");

var win = 0;
var lose = 0;
var left = 9;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    // Matching case, win
    if(userGuess == computerGuess) {
        ++win;
        left = 9;
        pastGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // No match, but still guesses left
    } else if (left > 1 && (userGuess != computerGuess)) {
        --left;
        pastGuesses.push(userGuess);
    // no match, no guesses left, lose
    } else if (left == 1) {
        ++lose;
        left = 9;
        pastGuesses = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    }

    
    userChoiceText.textContent = "You chose: " + userGuess;
    console.log("The Computer chose: " + computerGuess);
    userWin.textContent = "Win: " + win;
    userLose.textContent = "Lose: " + lose;
    guessLeft.textContent = "Guesses Left: " + left;
    prevGuess.textContent = "Your Guesses so far: " + pastGuesses;

};