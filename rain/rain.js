const button = document.querySelector("#myButtonOne");
const audio = document.querySelector("#player");

button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
})

const buttonTwo = document.querySelector("#myButtonTwo");
const video = document.querySelector("#myVideo");

buttonTwo.addEventListener("click", function() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
})

const start = 5;
let time = start * 60;


function updateCountdown() {
    let countdownEl = document.querySelector('#countdown');

    let minutes = Math.floor(time/60);
    let seconds = time%60;

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    else {
        seconds = seconds;
    }
    countdownEl.innerHTML = `${minutes} : ${seconds}`;

    time--;
    if (time < 0) {
        myStopFunction();
    time = 0;
    }

    else {
        time = time
    }
}

let myTimer = setInterval(updateCountdown, 1000);

function myStopFunction() {
    clearInterval(myTimer);
}