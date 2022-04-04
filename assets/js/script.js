// On load, initialise the game
window.addEventListener('load', startGame)

// Add global variables
let timer = 50;
let scoreDisplay = 0
let isPlaying;

// DOM constants
const timeDisplay = document.querySelector('.timer')
const wordDisplay = document.querySelector('.word-display')
const wordInput = document.querySelector('.word-input')
const gameMessage = document.querySelector('.message')
const showScore = document.querySelector('score')

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

// Start the game
function startGame(){
// Generate a random word
    const randomWord = Math.floor(Math.random() * wordArray.length);
// Display the random word    
    wordDisplay.innerHTML = wordArray[randomWord]
// Set timer countdown
    setInterval(countdown, 1000)
}

function countdown() {
    if(timer > 0) {
        timer--;
    } else if(timer === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = timer;
}
