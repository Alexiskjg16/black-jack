const PlayerShuffledDeck = () => {
  console.log('player clicked shuffle')
  // shuffle cards between suits and types
  // for each card in deck
  for (let i = 0; i < deck.length; i++) {
    //create a random number between 0-i
    const j=Math.floor(Math.random() * i)
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
  computershand.push(displayCard)
  console.log(computershand)
  const poppedCardObject2 = deck.pop()
  const displayCardTwo = poppedCardObject2["Rank"] + " of " + poppedCardObject2["Suit"]
  console.log(displayCardTwo)
  computershand.push(displayCardTwo)
  console.log(computershand)
  const poppedCardObject3 = deck.pop()
  const displayCardThree = poppedCardObject3["Rank"] + " of " + poppedCardObject3["Suit"]
  console.log(displayCardThree)
  hand.push(displayCardThree)
  console.log(hand)
  document.querySelector('.LetitDisplay').textContent=displayCardThree
  const poppedCardObject4 = deck.pop()
  const displayCardFour = poppedCardObject4["Rank"] + " of " + poppedCardObject4["Suit"]
  console.log(displayCardFour)
  hand.push(displayCardFour)
  console.log(hand)
  document.querySelector('.FirstDisplayCard').textContent=displayCardFour
  
}

const displayExtraCard = () => {
  const poppedCardObject5 = deck.pop()
  const displayExtraCard = poppedCardObject5["Rank"] + " of " + poppedCardObject5["Suit"]
  hand.push(displayExtraCard)
  console.log(hand)
  console.log(displayExtraCard)
  document.querySelector('.DisplayCardFive').textContent=displayExtraCard
}

// hand.push(poppedCardObject5)

  // let sum = 0
  // for ... {
  //   sum += card.value
  // }
  // if (sum > 21) ...

let hand = []
let computershand = []
let deck = []

const createPlayerDeck = () => {
  let suitOfCard = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
  let typeOfCard = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  let card_values = ['11', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10']
  for (let j = 0; j < suitOfCard.length; j++) {
    for (let i = 0; i < typeOfCard.length; i++) {
      deck.push({
         Rank: typeOfCard[i],
         Suit: suitOfCard[j],
         value: card_values[i]
      })
  PlayerShuffledDeck()

for (let sum = 0; sum += [i]; sum++) {
  Math.ceil(Math.sum <= 21)
}
}
}
}

document.addEventListener('DOMContentLoaded', createPlayerDeck)
document.querySelector('.LetitGo').addEventListener('click', displayCard)
document.querySelector('.DealAnother').addEventListener('click', displayExtraCard)
document.querySelector('.shuffleButton').addEventListener('click', PlayerShuffledDeck)