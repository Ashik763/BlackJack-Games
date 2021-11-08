var req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
req.send();
req.on



let blackjackGame = {
    'you': {'scoreSpan' : '#yourScore' ,'div': '#my-cards','score': 0},
    'dealer': {'scoreSpan' : '#dealerScore' ,'div': '#dealer-cards','score': 0} ,
    'cardMap': {"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"K":10,"Q":10,"J":10,"A":11} 

}
let cards = ["","" ,"2","3","4","5","6","7","8","9","10","A","J","K","Q"];

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('./sounds/swish.m4a');
const awwSound = new Audio('./sounds/aww.mp3');

document.querySelector(".hit").addEventListener("click", blackjackHit);
document.querySelector(".deal").addEventListener("click",blackjackDeal);
document.querySelector(".stand").addEventListener("click",blackjackStand);

function blackjackStand() {
    document.querySelector("#hit").disabled = true;
    for(let i = 0;  DEALER['score'] < YOU["score"] &&  DEALER['score'] < 21   ; i++) {
        showCard(DEALER);

    }
    // showCard(DEALER);
}

function blackjackHit() {
    showCard(YOU);
    // showCard(YOU);
 }
 let totalNum = 0;

 function showCard(activePlayer) {
    let cardImage = document.createElement('img');
    let num =Math.floor(Math.random()*13)+2;
    // if(num > 11 && num <= 14){
    //     num=10;
    // }
    // if(num > 13){
    //     num=10;
    // }
    updateScore(activePlayer,num)
  
    cardImage.src = `./images/${cards[num]}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();

 }

 function updateScore(activePlayer,num){
    console.log(num);
    
    activePlayer["score"] = activePlayer["score"]+ blackjackGame["cardMap"][cards[num]] ;
    // num=num+num;
    // console.log(totalNum);
    document.querySelector(activePlayer['scoreSpan']).innerHTML =  activePlayer["score"];
    if(activePlayer["score"] > 21 ){
      document.querySelector(activePlayer["scoreSpan"]).innerHTML = "Bust!";
      document.querySelector("#hit").disabled = true;
      document.querySelector("#stand").disabled = true;
      if(document.querySelector(activePlayer["scoreSpan"]).innerHTML === "Bust!"){
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
      }

    }
    // document.querySelector("#yourScore").innerHTML = ;

 }

 function blackjackDeal(){
     let yourImages = document.querySelector("#my-cards").querySelectorAll('img');
     let myImgBox = document.querySelector("#my-cards");
     console.log(yourImages);
     let dealerImgBox = document.querySelector("#dealer-cards");
      yourImages.forEach((img) => {
             console.log("clicked");
             img.remove();
         })

         YOU['score'] = 0;
         document.querySelector(YOU['scoreSpan']).innerHTML = YOU['score'] ;
         document.querySelector(DEALER['scoreSpan']).innerHTML = YOU['score'] ;
         document.querySelector("#hit").disabled = false;

    
     console.log(yourImages.length);
    // myImgBox.innerHTML = "";
    dealerImgBox.innerHTML = "";
    awwSound.play();
 }