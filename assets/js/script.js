// On load, initialise the game
window.addEventListener('load', initialise)

//===================================================================================
// Add global variables
let timer = 5;                                                                      
let score = 0;                                                                      
let isPlaying;                                                                        

// DOM constants
const timeDisplay = document.querySelector('.timer')                                
const wordDisplay = document.querySelector('.word-display')                          
const wordInput = document.querySelector('.word-input')                             
const gameMessage = document.querySelector('.message')                              
const scoreDisplay = document.querySelector('.score')                               
                                                                                    
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

//===================================================================================

function initialise() {
    // Display the words
    showWords()
    // Start the game upon typing
    wordInput.addEventListener('input', startGame)
    // Set timer countdown
    setInterval(countdown, 1000);
}

function showWords() {
    // Generate a random word
    const randomWord = Math.floor(Math.random() * wordArray.length);
    // Display the random word    
    wordDisplay.innerHTML = wordArray[randomWord]
}

// Start the game
function startGame() {
    if (checkMatch()) {
        isPlaying = true;
        timer = 6;
        wordInput.value = '';
        showWords()
        score++;
    }
    scoreDisplay.innerHTML = `Score: ${score}`;
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function countdown() {
    if (timer > 0) {
        timer--;
    } else if (timer === 0) {
        gameMessage.innerHTML = 'Game Over!';
        isPlaying = false;
        score = -1;
    }
    timeDisplay.innerHTML = timer;
}

function checkMatch() {
    if (wordInput.value === wordDisplay.innerHTML) {
        gameMessage.innerHTML = 'Well done!'
        return true;
    } else {
        gameMessage.innerHTML = '';
        return false;
    }
}