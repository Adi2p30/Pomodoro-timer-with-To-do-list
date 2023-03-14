let play = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")
let timeSeconds = document.querySelector("#timer-number-sec")
let timeMinutes = document.querySelector("#timer-number-min")
let time = timeMinutes.value * 60;

const timerUpdate = () => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    timeMinutes.value = minutes;
    timeSeconds.value = seconds;

    if(time === 0){
        clearInterval (movingTime)
    }
    time--;
}


const startTimer = () => {
        play.style.display = "none";
        pause.style.display = "block";
        pause.style.opacity = "1";
        reset.style.opacity = "1";
        timeSeconds.opacity = "1";
        timeMinutes.opacity = "1";
        movingTime = setInterval (timerUpdate, 1000)
}

const pauseTimer = () =>{
    play.style.display = "block";
    pause.style.display = "none";
    play.style.opacity = "0.1";
    reset.style.opacity = "0.1";
    timeSeconds.opacity = "0.2";
    timeMinutes.opacity = "0.2";
    clearInterval (movingTime)
    timeMinutes.value = minutes;
    timeSeconds.value = seconds;
}

const resetTimer = () =>{
    play.style.display = "block";
    pause.style.display = "none";
    play.style.opacity = "0.1";
    reset.style.opacity = "0.1";
    timeSeconds.opacity = "0.2";
    timeMinutes.opacity = "0.2";
    clearInterval (movingTime)
    timeSeconds.value = "00";
    timeMinutes.value = "25";
    time = timeMinutes.value * 60;

}

play.addEventListener("click", startTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)
