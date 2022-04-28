// On load, initialise the game
document.addEventListener('DOMContentLoaded', initialise);

//===================================================================================

// DOM constants
const timeDisplay = document.querySelector('.timer');
const wordDisplay = document.querySelector('.word-display');
const wordInput = document.querySelector('.word-input');
const gameMessage = document.querySelector('.message');
const scoreDisplay = document.querySelector('#score');
const closeInstruction = document.querySelector('.close');
const showInstruction = document.querySelector('.help-btn');
const restartBtn = document.querySelector('.restart-btn');
const introDisplay = document.querySelector('.introBtn');
const modalDisplay = document.querySelector('.modal-container');

// Add global variables
let timer = 6;
let score = 0;

// Word list for the 1st level
const wordArray = [
    'Understand',
    'Technical',
    'Spectacular',
    'Imagine',
    'Build',
    'Develop',
    'Produce',
    'Explain',
    'Construct',
    'Create',
    'Innovate',
    'Succeed',
    'Prepare',
    'Adjust',
    'Play',
    'Excel',
    'Enjoy',
    'Relax',
    'Assemble',
    'Code',
    'Logic',
    'Arrange',
    'Discover',
    'Reality',
    'Explore',
    'Value',
    'Platform',
    'Educate',
    'Podium',
    'Win',
]
//===================================================================================

function EventListener() {
        // Event listeners
        closeInstruction.addEventListener('click', closeInstructions);
        showInstruction.addEventListener('click', showInstructions);
        restartBtn.addEventListener('click', restart);
}

// Trigger the modal with user control of starting the game
function initialise() {
    // Listen out for the click, once clicked hide the modal and start the game
    introDisplay.addEventListener('click', () => {
        modalDisplay.classList.add('hide');
        startGame();
    });
}
// Start the game
function startGame() {
    // Display the words
    showWords();
    // Focus on the input box
    wordInput.focus();
    // Start the timer
    countdown();
    // Check the users input against the word displayed
    wordInput.addEventListener('input', checkMatch);
}
// Display the words at random
function showWords() {
    // Generate a random word
    const randomWord = Math.floor(Math.random() * wordArray.length);
    // Display the random word    
    wordDisplay.innerHTML = wordArray[randomWord];
}
// Check if its a match on L1
function checkMatch() {
    if(wordInput.value === wordDisplay.innerHTML) {
        score++;
        showWords();
        wordInput.value = '';
        timer = 6;
    }
    scoreDisplay.innerHTML = `Score: ${score}`;
    // First way to stop the game
    if(score === 10){
        clearInterval(gameInterval);
        timeDisplay.innerHTML = '';
        gameMessage.innerHTML = 'Level cleared!'
        wordDisplay.classList.add('hide');
        wordInput.classList.add('hide');
    }
}
// Countdown timer
function countdown() {
    gameInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            console.log('on'); // Keep this here to check timer is still working
        } else if (timer === 0) {
            // Second way to stop the game
            clearInterval(gameInterval);
            gameMessage.innerHTML = 'Time is up!';
            wordInput.classList.add('hide');
            scoreDisplay.innerHTML = `You scored: ${score}!`;
            console.log('off'); // Keep this here to check timer is still working
        }
        timeDisplay.innerHTML = timer;
    }, 1000);
}
// Show instructions when help button is clicked
function showInstructions() {
    let help = document.querySelector('.instructions');
    let helpBtn = document.querySelector('.help-btn');
    const helpDisplay = window.getComputedStyle(help).getPropertyValue('display');

    if (helpDisplay === 'none') {
        help.style.display = 'block';
        helpBtn.style.display = 'none';
    } else {
        help.style.display = 'none';
        helpBtn.style.display = 'block';
    }
}
// Hide instructions upon closing
function closeInstructions() {
    let help = document.querySelector('.instructions');
    let helpBtn = document.querySelector('.help-btn');

    if (help.style.display = 'block') {
        help.style.display = 'none';
        helpBtn.style.display = 'block';
    }
}
// Restart the L1 game on click
function restart() {
    clearInterval(gameInterval);
    wordInput.classList.remove('hide');
    wordInput.addEventListener('input', checkMatch);
    wordDisplay.classList.remove('hide');
    score = 0;
    scoreDisplay.innerHTML = `Score: 0`;
    showWords();
    timer = 6;
    countdown();
    wordInput.focus();
    gameMessage.innerHTML = "";
    wordInput.value = '';
}

module.exports = wordArray