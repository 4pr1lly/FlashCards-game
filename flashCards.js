let userFlippedCard= false;
let firstCard, secondCard;
let lockBoard = false; 

const cards = document.querySelectorAll('.cards');

function flipCard() {
    /*console.log("I was flipped");*/
if (lockBoard) return;  
if(this===firstCard) return; // function to stop doubclick of the card and holding on the board-run a boolean
this.classList.add("flip");


if (!userFlippedCard) { //when the user clicks the card for the first time.
    userFlippedCard = true;
    firstCard =this;
  return;  
}
    // second card flip
    userFlippedCard= false;
    secondCard = this;

//checking if the cards match

    checkForMatch (); 
    }

  function checkForMatch () {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;  //using Ternary operator
        
        isMatch ? disableCards() : unflipCards(); // ternary allows if else statement in just one line

     }


    function disableCards(){
        firstCard. removeEventListener('click', flipCard);
        secondCard. removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards (){
        lockBoard = true;// unlocks cards after they are flipped

        setTimeout(() => {
            firstCard.classList.remove ("flip");
            secondCard.classList.remove ("flip");

            resetBoard();
            }, 1200);
         }
     function resetBoard() {

       [userFlippedCard, lockBoard] = [false, false];
       [firstCard. secondCard] = [null, null];
    }   
     
    (function shuffle () { // this will iterate through the cards and shuffle the images
        cards.forEach( cards => {
            let randomPos = Math.floor (Math. random () *16);
                cards.getElementsByClassName.order = randomPos;
        });
    })() //immediately invoked (runs as soon as its defined)
    
    function Reset() {
        location.reload();
    }
    const button =document.querySelector("#reset")
     button.addEventListener("click", Reset) ;

cards.forEach(card=> card.addEventListener ("click", flipCard));
