//function generates random number from 1-6
function randomNum1() {
    var random = Math.floor(Math.random() * 6) + 1;
    return random;
}

//initialize variables for dice image and link them to actual .png files
var diceImg1 = "images/dice" + randomNum1() + ".png";
var diceImg2 = "images/dice" + randomNum1() + ".png";

//select query based on classes and set their attribute based on random generated image number
document.querySelector(".img1").setAttribute("src", + diceImg1);
document.querySelector(".img2").setAttribute("src", + diceImg2);

//generates random numbers for players
var player1 = randomNum1();
var player2 = randomNum1();

//compares players dice rolls
if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "DRAW!";
}