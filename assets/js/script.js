// let playerName = "ahmad"
// let chips = 200
let player = { //shorthand
    name:"ahmad",
    chips:200
}
// let cards = []
let sum = 0
const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")
cardsEl.innerHTML = "Cards: "
sumEl.innerHTML = "Sum: "
playerEl.innerHTML = `${player.name}: $${player.chips}`

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13)+1
    return randomNumber
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cardsEl.innerHTML = `Cards: ${firstCard} ${secondCard}`
    sumEl.innerHTML = `Sum: ${sum}`
}