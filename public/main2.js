function setupNewGame(){
  buildDeck
  shuffleDeck
  drawPlayerCard
  drawPlayerCard
  drawComputerCard
  drawComputerCard
  checkPlayerScore
  checkComputerScore
}

function buildDeck(){
  //builds the deck
}

function shuffleDeck(){
  //shuffles the deck
}

function drawPlayerCard(){
  //pull top card
  //add to player hand array
  //add to player LI
  checkPlayerScore
}

function drawComputerCard(){
  //pull top card
  //add to computer hand array
  //add to computer LI
  checkComputerScore
}

function playerHit(){
  drawPlayerCard
  computerTurn
}

function checkPlayerScore(){
  //set player score to 0
  //loop through player hand and add values to player score
  //update player score
  //check if player busted
  //if busted
  playerBusted
}

function checkComputerScore(){
  //set computer score to 0
  //loop through computer hand and add values to computer score
  //update computer score
  //check if computer busted
  //if busted
  computerBusted
}

//Doesn't need to be a function, just leaving it here to show the game play flow
function PlayerHold(){
  checkComputerScore
}

function computerTurn(){
  //set computer score to 0
  //whileloop while less than 17 looping through computer hand and add values to computer score
  //if less than 17
  drawComputerCard
  //elseif check if 17-21
  checkWinner
  //else busted
  computerBusted
}

function checkWinner(){
  //if statement checking scores
  //if computer won
  computerWins
  //else
  playerWins
}

function playerBusted(){
  //show player busted
  computerWins
}

function computerBusted(){
  //show computer busted
  playerWins
}

function computerWins(){
  //show that computer wins
}

function playerWins(){
  //show that playerWins
}

//For displaying cards
var playerHand = [
  [
    suit = ,
    value = ,
    rank = ,
  ]
]

for (i=0;i>playerhand.length;i++){
  li add "blah [i].1 of blah [i].2"
}