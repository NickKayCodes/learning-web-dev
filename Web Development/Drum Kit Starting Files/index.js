function eventListener(event) {

    document.addEventListener("keydown", function (event) { checkKeypress(event.key); })


}
eventListener();
function checkKeypress(key) {
    switch (key) {
        case "w": var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a": var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s": var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d": var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j": var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k": var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l": var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            alert("This isn't supposed to happen...");
    }
}

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        checkKeypress(buttonInnerHTML);
    }
    );
}

