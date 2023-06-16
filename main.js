const hint = document.getElementById("hint");
const noOfGuessesRef =document.getElementById("guessNum");
const guessedNumRef = document.getElementById("guessedNum");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("guessBtn");
const remaining = document.getElementById("lastResult");

let answer, noOfGuesses, guessedNumArr;

const play = () => {
    const userGuess = guessInput.value
    if(userGuess < 1 || userGuess> 100 || isNaN(userGuess)) {
        alert("Enter a valid number between 1 and 100.");
        return;
    }
    guessedNumArr.push(userGuess);
    noOfGuesses += 1;
    if(userGuess != answer) {
        if(userGuess < answer) {
            hint.innerHTML = `Too low. Think of a higher number!`;
        } else{
            hint.innerHTML = `Too high. Think of a lower number!`;
        }
        noOfGuessesRef.innerHTML = `<span>No. Of Guesses:</span> ${noOfGuesses}`;
        guessedNumRef.innerHTML = `<span> Previous Guesses: </span>${guessedNumArr.join(
            ","
        )}`;
        hint.classList.remove("error");
        setTimeout(() =>{
            hint.classList.add("error");
        }, 10);
    } else{
        hint.innerHTML = `Okay okay 😅 Congratulations.Your guess is correct!<br> You guessed the number correctly after trying <span>${noOfGuesses}</span> time(s) 😓`;
        hint.classList.add("Success");
        game.style.display = "none";
        restartButton.style.display = "block";
    }
};

const init = () => {
    console.log("Game Started");
    answer = Math.floor(Math.random() * 100)  * 1;
    console.log(answer);
    noOfGuesses = 0;
    guessedNumArr = [];
    noOfGuessesRef.innerHTML = "No. Of Guesses: None";
    guessInput.value = "";
    hint.classList.remove("Success", "error");    
};

guessInput.addEventListener("keydown",(event) => {
    if(event.keyCode === "13") {
        play();
    }
});

restartButton.addEventListener("click", () => {
    game.style.display = "grid";
    restartButton.style.display = "none";
    hint.innerHTML = "";
    hint.classList.remove("Success");
    init();
});

checkBtn.addEventListener("click", play);
window.addEventListener("load", init);
