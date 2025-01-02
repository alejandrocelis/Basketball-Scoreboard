
homeDisplay = document.getElementById("home-counter");
guessDisplay = document.getElementById("guess-counter");

function addOneHome() {
    homeDisplay.textContent =  Number(homeDisplay.textContent)+1;
}

function addTwoHome() {
    homeDisplay.textContent =  Number(homeDisplay.textContent)+2;
}

function addThreeHome() {
    homeDisplay.textContent =  Number(homeDisplay.textContent)+3;
}

function clearHomeDisplay (){
    homeDisplay.textContent = 0;
}    

function addOneGuess() {
    guessDisplay.textContent =  Number(guessDisplay.textContent)+1;
}

function addTwoGuess() {
    guessDisplay.textContent =  Number(guessDisplay.textContent)+2;
}

function addThreeGuess() {
    guessDisplay.textContent =  Number(guessDisplay.textContent)+3;
}

function clearGuessDisplay (){
    guessDisplay.textContent = 0;
}