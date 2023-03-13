let play = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")
let timeSeconds = document.querySelector("#timer-number-sec")
let timeMinutes = document.querySelector("#timer-number-min")



const startTimer = () => {
        play.style.display = "none";
        pause.style.display = "block";
        pause.style.opacity = "1";
        reset.style.opacity = "1";
        timeSeconds.opacity = "1";
        timeMinutes.opacity = "1";
}

const pauseTimer = () =>{
    play.style.display = "block";
    pause.style.display = "none";
    play.style.opacity = "0.1";
    reset.style.opacity = "0.1";
    timeSeconds.opacity = "0.2";
    timeMinutes.opacity = "0.2";
}

const resetTimer = () =>{
    play.style.display = "block";
    pause.style.display = "none";
    play.style.opacity = "0.1";
    reset.style.opacity = "0.1";
    timeSeconds.opacity = "0.2";
    timeMinutes.opacity = "0.2";
    timeSeconds.value = "00";
    timeMinutes.value = "25";
}

play.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)
