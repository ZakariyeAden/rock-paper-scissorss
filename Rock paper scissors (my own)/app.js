const compChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let computerChoice;
let userChoice;
let result;

possibleChoice.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  computerGenerator()
  getResults()
}));





// computer generator
function computerGenerator(){
  const randomNumber = Math.floor(Math.random()* 3)+ 1;

  if(randomNumber === 1){
    computerChoice = 'rock';
  }
   if(randomNumber === 2){
    computerChoice = 'paper';
  } if(randomNumber === 3){
    computerChoice = 'scissors';
  }
  compChoiceDisplay.innerHTML = computerChoice;
}

// print the results
function getResults(){
  if (computerChoice === userChoice){
    result = 'draw, try again🙁';
  }
  if(computerChoice === 'paper' && userChoice === 'scissors'){
    result = 'You win🤩';
  }
  if(computerChoice === 'scissors' && userChoice === 'paper'){
    result = 'You lost😒';
  }
  if(computerChoice === 'rock' && userChoice === 'paper'){
    result = 'You win🤩';
  } 
  if(computerChoice === 'paper' && userChoice === 'rock'){
    result = 'You lost😒';
  } 
  if(computerChoice === 'rock' && userChoice === 'scissors'){
    result = 'You win🤩';
  } 
  if(computerChoice === 'scissors' && userChoice === 'rock'){
    result = 'You lost😒';
  }
  resultDisplay.innerHTML = result;
}