const cards = document.querySelectorAll('.card');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

export function flipCard() {
  if(lockBoard) return;
  if(this === firstCard) return
  
  
  if(!flippedCard) {
    flippedCard = true;
    firstCard = this;
   
    return; 
}

  secondCard = this;
  checkMatch;
}

  export function checkMatch() {
    let isMatch = firstCard.dataset.character === secondCard.dataset.character;

    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function resetBoard() {
    [flippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      resetBoard();
  }, 1500);
}



cards.forEach(card => card.addEventListener('click', flipCard));