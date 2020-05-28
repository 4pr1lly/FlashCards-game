
let userFlippedCard= false;
let firstCard, secondCard

const cards = document.querySelectorAll('.cards');

function flipCard() {
    /*console.log("I was flipped");*/
this.classList.add("flip");
if (!userFlippedCard) { //when the user clicks the card for the first time.
    userFlippedCard = true;
    firstCard =this;
}else {
    // second card flip
    userFlippedCard= false;
    secondCard = this;

//checking if the cards match

if (firstCard.dataset.framework === secondCard.dataset.framework)


    
}

}

cards.forEach(card=> card.addEventListener ("click", flipCard));

