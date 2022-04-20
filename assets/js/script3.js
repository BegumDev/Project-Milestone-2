function restart() {
    timer = 6
    clearInterval(gameInterval)
    countdown()
    showWords();
    wordInput.focus()
    gameMessage.innerHTML = "";
    wordInput.value = '';
    scoreDisplay.innerHTML = `Score: 0`;
    score = 0;
}

module.exports = {restart}

// function buttonClick() {
//     document.getElementById("par").innerHTML = "You Clicked";
// }

// module.exports = {restart, buttonClick}