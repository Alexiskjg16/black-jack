let hand = []
let computershand = []
let deck = []
let computersum = 0
let playersum = 0

const PlayerShuffledDeck = () => {
  console.log('player clicked shuffle')
  // shuffle cards between suits and types
  // for each card in deck
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * i)
    //swap cards at position i and the random number
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
}

const displayCard = () => {

  const poppedCardObject = deck.pop()
  const displayCard = poppedCardObject["Rank"] + " of " + poppedCardObject["Suit"]
  console.log(displayCard)
  computershand.push(poppedCardObject)
  console.log(computershand)
  document.querySelector('.FirstDisplayCard').textContent = displayCard

  const poppedCardObject2 = deck.pop()
  const displayCardTwo = poppedCardObject2["Rank"] + " of " + poppedCardObject2["Suit"]
  console.log(displayCardTwo)
  computershand.push(poppedCardObject2)
  console.log(computershand)
  document.querySelector('.LetitDisplay').textContent = displayCardTwo
  for (i = 0; i < computershand.length; i++) {
    console.log(computershand[i])
    playersum += computershand[i].value
  }
  console.log("Player sum: " + playersum)
  document.querySelector('.ValueofHand').textContent = playersum
}
const playersFullHand = () => {  
  const poppedCardObject3 = deck.pop()
  const displayCardThree = poppedCardObject3["Rank"] + " of " + poppedCardObject3["Suit"]
  console.log(displayCardThree)
  hand.push(poppedCardObject3)
  console.log(hand)

  const poppedCardObject4 = deck.pop()
  const displayCardFour = poppedCardObject4["Rank"] + " of " + poppedCardObject4["Suit"]
  console.log(displayCardFour)
  hand.push(poppedCardObject4)
  console.log(hand)
  for (i = 0; i < hand.length; i++) {
    console.log(hand[i])
    computersum += hand[i].value
  }
  console.log("Computer sum: " + computersum)
  document.querySelector('.ValueofComputersHand').textContent = 'Computers Hand ' + displayCardFour
  // this is where we want to sum
  // let sum = 0
  // for (...) {
  //   sum += card.value
  // }
  // if (sum > 21) ...

}

function computersResult() {
  if (computersum < 17) {
    const poppedCardObject6 = deck.pop()
    const computersResult = poppedCardObject6["Rank"] + " of " + poppedCardObject6["Suit"]
    hand.push(poppedCardObject6)
    console.log(hand)
    console.log(computersResult)
    document.querySelector('.DisplayExtraCardComputer').textContent = computersResult
    computersum = 0

    for (i = 0; i < hand.length; i++) {
      console.log(hand[i])
      computersum += hand[i].value
    }
    console.log("Computer sum: " + computersum)
    document.querySelector('.ValueofComputersHand').textcontent = computersum
    computersResult()
  }
  else if (computersum > 16 && computersum < 22) {
    console.log('checkwhowon')
  }
  else {console.log('computer bust')}
}

const displayExtraCard = () => {
  const poppedCardObject5 = deck.pop()
  const displayExtraCard = poppedCardObject5["Rank"] + " of " + poppedCardObject5["Suit"]
  computershand.push(poppedCardObject5)
  console.log(computershand)
  console.log(displayExtraCard)
  document.querySelector('.DisplayCardFive').textContent = displayExtraCard
  
  for (i = 0; i < computershand.length; i++) {
    console.log(computershand[i])
    playersum += computershand[i].value
  }
  console.log("Player sum: " + playersum)
  document.querySelector('.ValueofHand').textContent = playersum

  if (playersum >= 22) {
    document.querySelector('.busted').textContent = "Busted!"

  }
}


const createPlayerDeck = () => {
  let suitOfCard = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
  let typeOfCard = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  let card_values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
  for (let j = 0; j < suitOfCard.length; j++) {
    for (let i = 0; i < typeOfCard.length; i++) {
      deck.push({
        Rank: typeOfCard[i],
        Suit: suitOfCard[j],
        value: card_values[i]
      })

      // for (let sum = 0; sum += [i]; sum++) {
      //   Math.ceil(Math.sum <= 21)
      // }
    }
  }
  PlayerShuffledDeck()
}

document.addEventListener('DOMContentLoaded', createPlayerDeck)
document.querySelector('.LetitGo').addEventListener('click', displayCard)
document.querySelector('.LetitGo').addEventListener('click', playersFullHand)
document.querySelector('.DealAnother').addEventListener('click', displayExtraCard)
document.querySelector('.shuffleButton').addEventListener('click', PlayerShuffledDeck)
document.querySelector('.nick').addEventListener('click', computersResult)