// après avoir cliquer sur Lets play, on arrive sur la page
// deux cartes apparaissent pour chaque joueur et pour le croupier
// --- les joueurs voient leur noms sur le plateau
//document.getElementById ("playera").innerHTML = "playerAname";
//document.getElementById ("playerb").innerHTML = "playerBname";
// ------- définir les joueurs 
function player (cards, chips, totalBet, points) {
  this.cards = cards;
  this.chips = chips;
  this.totalBet = totalBet;
  this.points = points;
}

var player = new player ([], 100, 5, 0)
// --- fonction qui donne deux cartes à chaque joueur

// ------- définisse le deck de cartes 
// ------- définisse les cartes
function card (value, ranks, suits) {
  this.value = value;
  this.ranks = ranks;
  this.suits = suits;
};

  var ranks = ["A", "2", "3","4","5","6","7","8","9","J","Q","K"];
  var suits = [ "hearts", "diams", "clubs", "spades" ];
  var value = [];
  var deck = [];

function deckOfCard () {

  for (var s = 0; s < this.suits.length; s++) {
    for (var r = 0; r < this.ranks.length; r++) {
      if (r > 9 ) {
      deck.push(new card(10, this.ranks[r], this.suits[s]));
      } else if (this.ranks[r]==="A"){
        deck.push(new card(11, this.ranks[r], this.suits[s]));
      }
      else deck.push(new card(r+1, this.ranks[r], this.suits[s]));
    }
  }


  return deck;
}

deckOfCard()

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
function giveCard () {
  if( deck.length > 0 ) {
      var random = Math.floor( Math.random() * deck.length );
      card = deck.splice( random, 1 )[0];
    }
  var cardLength = card.length;
  for (var c = 0; c < cardLength; c++) {
      var xy = card[c].length;
     game.load.image(card[c].substring(0,xy-4),"../images/cartes/"+card[c]);
 }
};

giveCard ()

       
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