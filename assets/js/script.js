// On load, initialise the game
document.addEventListener('DOMContentLoaded', intro);

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
const nextLevelBtn = document.querySelector('.next-level')

// Event listeners
closeInstruction.addEventListener('click', closeInstructions);
showInstruction.addEventListener('click', showInstructions);
restartBtn.addEventListener('click', restart);
nextLevelBtn.addEventListener('click', nextLevel)

// Add global variables
let timer = 6;
let score = 0;

const wordArray = [
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
    'Understand',
    'Play',
    'Excel',
    'Enjoy',
    'Relax',
    'Assemble',
    'Code',
    'Logic',
    'Technical',
    'Spectacular',
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

const wordArrayL2 = [
        'Amaze',
        'Discover',
        'Repeat',
        'Create',
        'Innovate',
        'Succeed',
        'Prepare',
        'Adjust',
        'Understand',
        'Play',
        'Excel',
        'Enjoy',
        'Relax',
        'Assemble',
        'Code',
]

//===================================================================================
// Trigger the modal with user control of starting the game
function intro() {
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
//Display the L1 words in order
function showWords() {
    let counter = 0;

    for(let i = 0; i < wordArray.length; i++) {
        if(wordInput.value === wordDisplay.innerHTML) {
            wordArray.shift();
            console.log(wordArray[counter]) // Take this out later
        }
        wordDisplay.innerHTML = wordArray[counter];
    }
}
// Display the L2 words at random
function showWordsL2() {
    // Generate a random word
    const randomWord = Math.floor(Math.random() * wordArrayL2.length);
    // Display the random word    
    wordDisplay.innerHTML = wordArrayL2[randomWord];
    console.log(wordArrayL2[randomWord]);
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
    if(score === 3){
        clearInterval(gameInterval);
        timeDisplay.innerHTML = '';
        gameMessage.innerHTML = 'Level cleared!'
        wordDisplay.classList.add('hide');
        wordInput.classList.add('hide');
        // Put a next level button here
    }
}
// Check if its a match on L2
function checkMatch2() {
    if(wordInput.value === wordDisplay.innerHTML) {
        score++;
        showWordsL2();
        wordInput.value = '';
        timer = 4;
    }
    scoreDisplay.innerHTML = `Score: ${score}`;
    // First way to stop the game
    if(score === 8) {
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
// Restart the L1 game on click - COME BACK TO THIS TO INCORPORATE THE WORDS DISPLAY IN ORDER - REM MAYBE RESET SCORE
function restart() {
    clearInterval(gameInterval);
    wordInput.classList.remove('hide');
    wordInput.removeEventListener('input', checkMatch2); // Removes the L2 game with 3 sec timer and replaces it with...
    wordInput.addEventListener('input', checkMatch); // this L1 game with 5 sec timer
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
// Next level FIX WHEN YOU GET SCORE TO MAX CANNOT USE NEXT LEVEL AGAIN
function nextLevel(){
    clearInterval(gameInterval);
    scoreDisplay.innerHTML = `Score: 0`;
    score = 0;
    timer = 4;
    showWordsL2();
    countdown();
    wordDisplay.classList.remove('hide');
    wordInput.classList.remove('hide');
    wordInput.focus();
    wordInput.value = '';
    wordInput.removeEventListener('input', checkMatch);
    wordInput.addEventListener('input', checkMatch2);
}