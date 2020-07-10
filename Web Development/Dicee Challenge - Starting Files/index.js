//function generates random number from 1-6
function randomNum1() {
    var random = Math.floor(Math.random() * 6) + 1;
    return random;
}
//generates random numbers for players
var player1 = randomNum1();
var player2 = randomNum1();

//initialize variables for dice image for player1 and player2 and generate image link according to dice roll.
var diceImg1 = "images/dice" + player1 + ".png";
var diceImg2 = "images/dice" + player2 + ".png";

//select query based on classes and set their attribute based on random generated image number
document.querySelectorAll("img")[0].setAttribute("src", + diceImg1);
document.querySelectorAll("img")[1].setAttribute("src", + diceImg2);


//compares players dice rolls
if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}