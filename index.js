// var req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
// req.send();
// req.on



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
const cashSound = new Audio('./sounds/cash.mp3');
let numberOfWin = 0;
let numberOfLoss = 0;

document.querySelector(".hit").addEventListener("click", blackjackHit);
document.querySelector(".stand").addEventListener("click",blackjackStand);
document.querySelector(".deal").addEventListener("click",blackjackDeal);


function blackjackStand() {
    //document.querySelector("#hit").disabled = true;
    for(let i = 0;  DEALER['score'] <= YOU["score"] &&  DEALER['score'] < 21   ; i++) {
      
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
  
    let subTitle = document.querySelector(".sub-title");

    document.querySelector(activePlayer['scoreSpan']).innerHTML =  activePlayer["score"];
    if(YOU['score'] < DEALER['score'] && DEALER['score'] <= 21) {
        subTitle.innerHTML = " You lost";
        subTitle.style.color = "red";
        console.log("11111111");
        numberOfLoss = numberOfLoss + 1;
        let lossDiv = document.querySelector("#loss");
        lossDiv.innerHTML = " ";
        lossDiv.innerHTML = numberOfLoss;
        console.log("4444444444444");

    }
    if(activePlayer["score"] > 21 ){
      document.querySelector(activePlayer["scoreSpan"]).innerHTML = "Bust!";
      document.querySelector("#hit").disabled = true;
      document.querySelector("#stand").disabled = true;
      if(document.querySelector(activePlayer["scoreSpan"]).innerHTML === "Bust!"){
        document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
        console.log("222222222222222222");
      }
      if(activePlayer == DEALER){
        subTitle.innerHTML = " You won";
        subTitle.style.color = "green";
       // let numberOfWin = 0;
        numberOfWin = numberOfWin + 1;
        let winDiv = document.querySelector("#win");
        winDiv.innerHTML =" ";
        winDiv.innerHTML = numberOfWin;
        console.log("3333333333");
      

      }
      else if(activePlayer == YOU){
        subTitle.innerHTML = " You lost";
        subTitle.style.color = "red";
       // let numberOfLoss = 0;
        numberOfLoss = numberOfLoss + 1;
        let lossDiv = document.querySelector("#loss");
        lossDiv.innerHTML = " ";
        lossDiv.innerHTML = numberOfLoss;
        console.log("4444444444444");

      }
    

    }
    // document.querySelector("#yourScore").innerHTML = ;

 }

 function blackjackDeal(){
    document.querySelector(YOU["scoreSpan"]).style.color = "white";
    document.querySelector(DEALER["scoreSpan"]).style.color = "white";
    let subTitle = document.querySelector(".sub-title");
    subTitle.innerHTML = "Let's play again";
    subTitle.style.color = "black";
     let yourImages = document.querySelector("#my-cards").querySelectorAll('img');
     let myImgBox = document.querySelector("#my-cards");
     console.log(yourImages);
     let dealerImgBox = document.querySelector("#dealer-cards");
      yourImages.forEach((img) => {
             console.log("clicked");
             img.remove();
         })

         YOU['score'] = 0;
         DEALER['score'] = 0;
         document.querySelector(YOU['scoreSpan']).innerHTML = YOU['score'] ;
         document.querySelector(DEALER['scoreSpan']).innerHTML = YOU['score'] ;
         document.querySelector("#hit").disabled = false;
         document.querySelector("#stand").disabled = false;

    
     console.log(yourImages.length);
    // myImgBox.innerHTML = "";
    dealerImgBox.innerHTML = "";
    //awwSound.play();
    cashSound.play();
 }