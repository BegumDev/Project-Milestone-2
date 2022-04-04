// On load, initialise the game
window.addEventListener('load', startGame)

// Add global variables
const timer = document.querySelector('.timer')
const wordDisplay = document.querySelector('.word-display')
const wordInput = document.querySelector('.word-input')
const gameMessage = document.querySelector('.message')
const scoreDisplay = document.querySelector('score')

let timer = 10;
let scoreDisplay = 0
let isPlaying;





function startGame(){
    console.log('Ready')
}