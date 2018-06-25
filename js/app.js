//function to matching card game....

const deck = document.querySelector('.deck');
let cards = [];
const matchedCards = [];

// add event listener to each card....

 deck.addEventListener("click",function(e) {
     if(e.target.classList.contains('card') && cards.length < 2 && !(e.target.classList.contains('open','show'))) {
        e.target.classList.add('open','show');
           cards.push(event.target);
      if(cards.length == 2) {
          compareCards();
      }
    }
});

// function when card match....

function compareCards() {
   if(cards[0].innerHTML == cards[1].innerHTML) {
        matchedCards.push(cards[0]);
        matchedCards.push(cards[1]);

            cards[0].classList.add('match');
            cards[0].classList.remove('open','show');

            cards[1].classList.add('match');
            cards[1].classList.remove('open','show');

    cards = [];
    moveCounter();
    endGame();
}

// when cards not match and set timeout....
   
    else { setTimeout(function() {
           cards[0].classList.remove('open','show');
           cards[1].classList.remove('open','show');
           cards = [];
           }, 1000);
      }
    moveCounter();
} 

// to activate move counter....

const movesCounter = document.querySelector('.moves');

function moveCounter(){
    let moves = movesCounter.textContent;    
        moves++;    
        movesCounter.textContent = moves;
}

// to show popup when all cards match....

function endGame() {
    if (matchedCards.length == 16) {
        alert("Congrats.. YOU WON");
     }
}

// add event listener to restart game....

const reset = document.querySelector('.restart');
     reset.addEventListener("click", function(event) {
      window.location.reload();
});
