/**
 * This event listeners initialises the game as soon as the DOM content had loaded.
 */
document.addEventListener('DOMContentLoaded', initialise);

//===================================================================================

/**
 * These are the global variables
 */
let timeDisplay = document.querySelector('.timer');
let wordDisplay = document.querySelector('.word-display');
let wordInput = document.querySelector('.word-input');
let gameMessage = document.querySelector('.message');
let scoreDisplay = document.querySelector('#score');
let closeInstruction = document.querySelector('.close');
let showInstruction = document.querySelector('.help-btn');
let restartBtn = document.querySelector('.restart-btn');
let introDisplay = document.querySelector('.introBtn');
let modalDisplay = document.querySelector('.modal-container');
let timer = 6;
let score = 0;

/**
 * The list of words to be displayed
 */
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
];
//===================================================================================

/**
 * Trigger the modal with user control of starting the game
 */
function initialise() {
    showInstruction.addEventListener('click', showInstructions);
    closeInstruction.addEventListener('click', closeInstructions);
    restartBtn.addEventListener('click', restart);
    /**
     * Listen out for the click, once clicked hide the modal and start the game
     */
    introDisplay.addEventListener('click', () => {
        modalDisplay.classList.add('hide');
        startGame();
    });
}

/**
 * Start the game
 */
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
/**
 * Display the words at random
 */
function showWords() {
    // Generate a random word
    const randomWord = Math.floor(Math.random() * wordArray.length);
    // Display the random word    
    wordDisplay.innerHTML = wordArray[randomWord];
}

/**
 * Check if the users word and the display word matches and increment score accordingly
 */
function checkMatch() {
    if (wordInput.value === wordDisplay.innerHTML) {
        score++;
        showWords();
        wordInput.value = '';
        timer = 6;
        gameMessage.innerHTML = 'Well done!';
    } else {
        gameMessage.innerHTML = "";}
    scoreDisplay.innerHTML = `Score: ${score}`;
    if (score === 5) {
        clearInterval(gameInterval);
        timeDisplay.innerHTML = '';
        gameMessage.innerHTML = 'Level cleared...Great Job!';
        wordDisplay.classList.add('hide');
        wordInput.classList.add('hide');
    } 
}

/**
 * Countdown timer
 */
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

/**
 * Show instructions when help button is clicked
 */
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
/**
 * Hide instructions upon closing
 */
function closeInstructions() {
    let help = document.querySelector('.instructions');
    let helpBtn = document.querySelector('.help-btn');

    if (help.style.display = 'block') {
        help.style.display = 'none';
        helpBtn.style.display = 'block';
    }
}
 
/**
 * Restart the L1 game on click
 */
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

if (typeof module != "undefined") module.exports = wordArray;