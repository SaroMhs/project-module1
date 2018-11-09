// après avoir cliquer sur Lets play, on arrive sur la page
// deux cartes apparaissent pour chaque joueur et pour le croupier
// --- les joueurs voient leur noms sur le plateau
//document.getElementById ("playera").innerHTML = "playerAname";
//document.getElementById ("playerb").innerHTML = "playerBname";
// ------- définir les joueurs 


var ranks = [1,2,3,4,5,6,7,8,9];
var suits = [ "hearts", "diams", "clubs", "spades" ];
var deck = [];
var randomCard;
var dealerpoints = [];
var playerpoints = [];
var sum = [];
var value;
var cardpull;
var playercards=[];
var dealercards=[];
var score;



function card (ranks, suits) {
  this.ranks = ranks;
  this.suits = suits;
};

// This is the deck of Card, there are 40 cards. 
function deckOfCard () {
 for (var s = 0; s < this.suits.length; s++) {
   for (var r = 0; r < this.ranks.length; r++) {
     if (r > 9 ) {
     deck.push(this.ranks[r]+this.suits[s]);
     } else if (this.ranks[r]==="A"){
       deck.push(this.ranks[r]+this.suits[s]);
     }
     else deck.push(this.ranks[r]+this.suits[s]);
   }
 }
 return deck;
};

deckOfCard();

console.log("this is the deck : " + deck)
//console.log("this is the deckOfCard : " + deckOfCard());

// this function give us random card 
function randCard() {
      return randomCard = deck[Math.floor(Math.random() * deck.length)];
 };
randCard();

//console.log("this is randCard(): " +randCard());
console.log("this is randomCard : "+randomCard);

// this function give us the value of each random card given
function valueCard() {
    return value=randomCard.charAt(0);
};

valueCard();

//console.log("this is valueCard(): "+valueCard());
console.log("this is value : "+value);

// this function add each card to the dealer or player deck

//ATTENTION ICI LA FUNCTION NOUS SORT UNE SEULE ET MEME CARTE

function pullcard(){
  for (var c=0; c<deck.length; c++){
    g
  }
    dealercards.push(randomCard);
};

console.log("this is dealercards "+dealercards);
console.log("this is playercard : "+playercards)


//this function sum up the value
function calcsore(){
  score=0;
  for (i=0; i<value.length; i++){
    if (value[i]>=10){
      score+=10;
    } else {
      score+=value[i]; 
    };
  } return score;
};
calcsore();

//console.log("this is calcsore : "+calcsore());
console.log("this is score : "+score);

//this is the hand of the dealer
function play(){
  if (score<17){
    pullcard(0);
  }
  return dealercards
};

play();

console.log("this is dealerplay() : "+play());
console.log("this is dealercard : "+dealercards);


/*
// console.log (nameCard)

/*
function deckOfCard () {

 for (var s = 0; s < this.suits.length; s++) {
   for (var r = 0; r < this.ranks.length; r++) {
     if (r > 9 ) {
     deck.push(this.ranks[r]+this.suits[s]);
     } else if (this.ranks[r]==="A"){
       deck.push(this.ranks[r]+this.suits[s]);
     }
     else deck.push(this.ranks[r]+this.suits[s]);
   }
 }
 return deck;
}

console.log (deckOfCard().length)

var deckCard = deckOfCard()

function giveCard (deckCard) {
      var random = Math.floor( Math.random() * deckCard.length);
      return random
 };

giveCard () 
*/

// les cartes sont mélangés et distribués

       
/*
// ------- deux cartes aléatoires sortent pour chaque joueur et la banque
// -------- calculer la somme des cartes sortient aléatoirement 
function sumUp(valueCardOne, valueCardTwo) {
  return valueCardOne + valueCardTwo;
}

// -------- montrer le resultat sur le plateau
document.getElementById("pointa").innerHTML = sumUpP;

// --- le joueur clique sur "add card"
$(function(){
  $ ('#addCard').click, function(){
    giveCard();
  }
});
// -------- fonction qui lui distribue une carte en plus
// -------- montrer la valeur des cartes sur le plateau
// -------- calcul de la somme des cartes
// -------------- si la somme est suppérieur à 21, le joueur perd
if (sumUp > 21) {
  playerBet -= totalBet;
}
// ------------------- on passe au joueur suivant
// -------------- si la somme est inférieur à 21, le joueur peut rechoisir
// -------------- si la somme est égale à 21, le joueur gagne
if (sumUpPlayerA == 21 ){
  playerBet += totalBet;
}
// ------------------ tour du joueur 2

// --- le joueur clique sur "rest"
$(function(){
  $ ('#rest').click, function(){
    playerA.rest();
  }
});
// ------ on passe au joueur 2

// --- le joueur 2 clique sur "add card" DO .. WHILE
// -------- fonction qui lui distribue une carte en plus
// -------- montrer la valeur des cartes sur le plateau
// -------- calcul de la somme des cartes
// -------------- si la somme est suppérieur à 21, le joueur perd
// ------------------- on passe a la banque
// -------------- si la somme est inférieur à 21, le joueur peut rechoisir
// -------------- si la somme est égale à 21, le joueur gagne
// ------------------ tour de la banque

// --- le joueur clique sur "rest"
// ------ on passe a la banque

// calcule de la somme des points de la banque
// -- si c'est inférieur à 16
// ------ ajouter une carte
// ---------- si c'est inférieur à 21 mais suppérieur à 17
// --------------- arreter la
// --------------- comparer si la somme de la banque est sup à celle du joueur
// ------------------- si le joueur est plus proche de 21, il gagne
// ---------- si c'est suppérieur à 21, le joueur encore en jeu gagne
// ---------------- doubler la mise du joueur

// le gagnant est le dernier joueur a qui il reste des jetons
window.alert(dernier joueur+ " you win !");
*/