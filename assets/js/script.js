// let playerName = "ahmad"
// let chips = 200
let player = { //shorthand
    name:"ahmad",
    chips:200
}
let isAlive = false
// let cards = []
let sum = 0
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")

messageEl.innerHTML = "Want to play a round?"
cardsEl.innerHTML = "Cards: "
sumEl.innerHTML = "Sum: "
playerEl.innerHTML = `${player.name}: $${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13)+1
    return randomNumber
}

function startGame() {
    if(isAlive == false){
        isAlive = true
        player.chips -= 50
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        sum = firstCard + secondCard
        cardsEl.innerHTML = `Cards: ${firstCard} ${secondCard}`
        sumEl.innerHTML = `Sum: ${sum}`
        playerEl.innerHTML = `${player.name}: $${player.chips}`
        
    }else{
        alert('You already have started the game')
    }
}