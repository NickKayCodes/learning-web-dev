
function randomNum1() {
    var random = Math.floor(Math.random() * 6) + 1;
    return random;
}

document.querySelector(".img1").setAttribute("img1", + "dice" + randomNum1() + ".png");
document.querySelector(".img2").setAttribute("img2", + "dice" + randomNum1() + ".png");