let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomInput = Math.ceil(Math.random() * 100);
console.log(randomInput)

function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    if (guessNumber > randomInput) {
        gameResult.textContent = "Too high,Try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber < randomInput) {
        gameResult.textContent = "Too low,Try again";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessNumber === randomInput) {
        gameResult.textContent = "Congratualations!";
        gameResult.style.backgroundColor = "Green";
    } else {
        gameResult.textContent = "Please provide a valid input";
        gameResult.style.backgroundColor = "red";

    }

}