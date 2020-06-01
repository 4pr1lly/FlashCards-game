let userFlippedCard= false;
let firstCard, secondCard;
let lockBoard = false; 
//records current timer. on or off
let timerOn = false;

const symbols = [
    '<i class="fa fa-star"></i>', '<i class="fa fa-star"></i>',];

const cards = document.querySelectorAll('.cards');


function flipCard() {
    /*console.log("I was flipped");*/

// function to stop doubclick of the card and holding on the board-run a boolean

if (lockBoard) return;  
if(this===firstCard) return; 
this.classList.add("flip");


//when the user clicks the card for the first time.
if (!userFlippedCard) { 
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


    // ternary allows if else statement in just one line
function checkForMatch () {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;  
        
        isMatch ? disableCards() : unflipCards(); 

     }


function disableCards(){
        firstCard. removeEventListener('click', flipCard);
        secondCard. removeEventListener('click', flipCard);

        resetBoard();
    }

 // unlocks cards after they are flipped
function unflipCards (){
        lockBoard = true;

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
     
    // this will iterate through the cards and shuffle the images
    (function shuffle () { 
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


   //track scoring   

   /*function startTimer() {
    timer = setInterval(function() {
    time++;
    minutes = ("0" + Math.floor(time / 60)).slice(-2);
    seconds = ("0" + time % 60).slice(-2);
    document.querySelector('.timer').innerHTML = minutes + ":" + seconds;
  }, 1000);
}*/

/*function starRate(moves) {
  let stars;
  if (moves < 32) {
    stars =
    `<i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>`;
  }
  else if (moves >= 32 && moves <= 38) {
    stars =
    `<i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="far fa-star"></i>`;
  } else if (moves > 38 && moves <= 46) {
    stars =
    `<i class="fas fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`;
  } else if (moves > 46) {
    stars =
    `<i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>`;
  }
  return stars;
}*/

    // display moves

    /*document.querySelector('.moveCounter').innerHTML = moves + " moves";*/

    // Check for the winning condition:

   




cards.forEach(card=> card.addEventListener ("click", flipCard));
