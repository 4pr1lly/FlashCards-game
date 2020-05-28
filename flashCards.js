
const cards = document.querySelectorAll('.cards');

function flipCard() {
    /*console.log("I was clicked");*/
this.classList.toggle("flip");

}

cards.forEach(card=> card.addEventListener ("click", flipCard));

