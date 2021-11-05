var req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
req.send();
req.on



let blackjackGame = {
    'you': {'scoreSpan' : '#yourScore' ,'div': '#me','score': 0},
    'dealer': {'scoreSpan' : '#dealerScore' ,'div': '#dealer','score': 0},

}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('./sounds/swish.m4a');

document.querySelector(".hit").addEventListener("click", blackjackHit)

function blackjackHit() {
    let cardImage = document.createElement('img');
    cardImage.src = './images/2.png';
    document.querySelector("#my-cards").appendChild(cardImage);
    hitSound.play();
 }