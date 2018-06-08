
// Define alphabet array with letters for the computer choose from.
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Define global variables.
let wins = 0;
let losses = 0;
let guessCount = 10;
let guesses = 10;
let lettersGuessed = [];
let letterToGuess = null;


// The letter the player needs to guess.
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// Updates the guessCount.
function updateGuessCount () {
    document.querySelector('#guess-count').innerHTML = "Guesses left: " + guessCount;
};

// Updates the letter that the user needs to guess.
function updateLetterToGuess () {
    letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
};

// Updates the list of letters guessed by the user.
let updateLettersGuessed = function () {
    document.querySelector('#letters-guessed').innerHTML = "Your Guesses so far: " + lettersGuessed.join(', ');
};

// Resets the game. 
function reset () {
    guessCount = 10;
    lettersGuessed = [];

    updateLetterToGuess();
    updateGuessCount();
    updateLettersGuessed();
};

updateLetterToGuess();
updateGuessCount();


// Detects user's keyboard input.
document.onkeyup = function (event) {
    //guessCount--;
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // limiting to alphanumeric characters only.
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("Invalid Entry");
    } else if (event.keyCode >= 65 || event.keyCode < 90) {
       // guessCount--;
        if (lettersGuessed.includes(userGuess) === false) {
            lettersGuessed.push(userGuess);
            guessCount--;
        } else {
            alert('You already chose that letter.');
        }

    };

    
    //lettersGuessed.push(userGuess);
    updateGuessCount();
    updateLettersGuessed();

    if (guessCount > 0) {
        if(userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("Are you psychic? How did you know?");
            reset();
        }
    } else if (guessCount == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you've run out of chances. Try again...");
            reset();
        }
    };