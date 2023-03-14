let play = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")
let timeSeconds = document.querySelector("#timer-number-sec")
let timeMinutes = document.querySelector("#timer-number-min")
let time = timeMinutes.value * 60 ;
let timeUpSound = new Audio("../audio/bells-logo-140886.mp3");
var rum = 1;

const timerUpdate = () => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    timeMinutes.value = minutes;
    timeSeconds.value = seconds;

    if (time === 0 && rum === 1){
        play.style.display = "block";
        pause.style.display = "none";
        play.style.opacity = "0.1";
        reset.style.opacity = "0.1";
        timeUpSound.play();
        clearInterval (movingTime);
        alert ("Time is up!");
        timeMinutes.value = 10;
        timeSeconds.value === 00;
        rum = rum + 1;
    } else if (time === 0 && rum === 2){
        play.style.display = "block";
        pause.style.display = "none";
        play.style.opacity = "0.1";
        reset.style.opacity = "0.1";
        timeUpSound.play();
        clearInterval (movingTime);
        alert ("Time is up!");
        timeMinutes.value = 25;
        timeSeconds.value === 00;
        rum = rum - 1;
    } else {
        time--;
    }
}


const startTimer = () => {
        play.style.display = "none";
        pause.style.display = "block";
        pause.style.opacity = "1";
        reset.style.opacity = "1";
        document.querySelectorAll(".timer-input").forEach((el) => (el.style.opacity = "1"));
        movingTime = setInterval (timerUpdate, 1000)
}

const pauseTimer = () =>{
    play.style.display = "block";
    pause.style.display = "none";
    play.style.opacity = "0.1";
    reset.style.opacity = "0.1";
    document.querySelectorAll(".timer-input").forEach((el) => (el.style.opacity = "0.2"));
    clearInterval (movingTime)
    timeMinutes.value = minutes;
    timeSeconds.value = seconds;
}

const resetTimer = () =>{
    play.style.display = "block";
    pause.style.display = "none";
    play.style.opacity = "0.1";
    reset.style.opacity = "0.1";
    document.querySelectorAll(".timer-input").forEach((el) => (el.style.opacity = "0.2"));
    clearInterval (movingTime)
    timeSeconds.value = "00";
    timeMinutes.value = "25";
    time = timeMinutes.value * 60;
}

play.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)
