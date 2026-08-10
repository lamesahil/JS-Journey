let random = Math.floor(parseInt(Math.random() * 100) + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault(); //prevents page from reloading when submit button is clicked
        const guess = parseInt(userInput.value);//parseInt converts the string to a number
        console.log(guess, random);
        validateGuess(guess);
    });
}


function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please enter a valid number");
    } else if(guess < 1) {
        alert("Please enter a number greater than 0");
    } else if(guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${random}`);
            endGame();
        }else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess) {
    if(guess === random) {
        displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses`);
        endGame();
    } else if(guess < random) {
        displayMessage(`Your guess is too low`);
    } else if(guess > random) {
        displayMessage(`Your guess is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `; // display the guess in the guessSlot div
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", ""); //disable the input field
    p.classList.add("button");//add a class to the p element
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);//append the p element to the startOver div
    playGame = false;
    newGame(); 
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function() {
        // Reset the game state
        random = Math.floor(parseInt(Math.random() * 100) + 1);
        userInput.value = "";
        userInput.removeAttribute("disabled"); //enable the input field
        guessSlot.innerHTML = "";
        remaining.innerHTML = "11";
        lowOrHi.innerHTML = "";
        startOver.removeChild(p); //remove the p element from the startOver div
        prevGuess = [];
        numGuess = 1;
        playGame = true;
    });
}