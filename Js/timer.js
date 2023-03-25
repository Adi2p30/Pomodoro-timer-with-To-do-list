const playButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const timerChangeSettings = document.querySelector(".timer-settings-list")
const timeMinutes = document.querySelector("#timer-number-min");
const timeSeconds = document.querySelector("#timer-number-sec");
const timeUpSound = new Audio("../audio/clock-alarm-8761.mp3");
const soundTesting = document.querySelector("#soundTesting")
let time = 1500;
let isRunning = true;
let minutes = 00;
let seconds = 00;
let movingTime;

const playingSound = () =>{
timeUpSound.play();
}

const SECONDS_IN_MINUTES = 60;

const updateTimer = () => {

  minutes = Math.floor(time / SECONDS_IN_MINUTES);
  seconds = time % SECONDS_IN_MINUTES;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  timeMinutes.innerHTML = minutes;
  timeSeconds.innerHTML = seconds;

  if (time === 0) {
    timeUpSound.play();
    timerChangeSettings.style.display = "flex";
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    playButton.style.opacity = "0.1";
    resetButton.style.opacity = "0.1";
    clearInterval(movingTime);
    timeMinutes.innerHTML = "00";
    timeSeconds.innerHTML = "00";
    document
    .querySelectorAll(".timer-input")
    .forEach((el) => (el.style.opacity = "0.2"));
    time = 0;
    setUpAlert = setInterval(pushAlert, 1000)
  } else {
    time--;
  }
};

const pushAlert = () =>{
  alert("Time is up!")
  clearInterval(setUpAlert)
}

const startTimer = () => {
  if (time > 0){
  updateTimer();
  movingTime = setInterval(updateTimer, 1000);

  playButton.style.display = "none";
  pauseButton.style.display = "block";
  pauseButton.style.opacity = "1";
  resetButton.style.opacity = "1";
  timerChangeSettings.style.display = "none";
  document
    .querySelectorAll(".timer-input")
    .forEach((el) => (el.style.opacity = "1"));
  } else {
    alert("Please select a time!")
  }
};

const pauseTimer = () => {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  playButton.style.opacity = "0.1";
  resetButton.style.opacity = "0.1";
  timerChangeSettings.style.display = "flex";
  document
    .querySelectorAll(".timer-input")
    .forEach((el) => (el.style.opacity = "0.2"));
  clearInterval(movingTime);
  timeMinutes.innerHTML = minutes;
  timeSeconds.innerHTML = seconds;
};

const resetTimer = () => {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  playButton.style.opacity = "0.1";
  resetButton.style.opacity = "0.1";
  timerChangeSettings.style.display = "flex";
  document
    .querySelectorAll(".timer-input")
    .forEach((el) => (el.style.opacity = "0.2"));
  clearInterval(movingTime);
  timeSeconds.innerHTML = "00";
  timeMinutes.innerHTML = "00";
  time = 0;
};

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

/* let play = document.querySelector("#start")
let pause = document.querySelector("#pause")
let reset = document.querySelector("#reset")
let timeSeconds = document.querySelector("#timer-number-sec")
let timeMinutes = document.querySelector("#timer-number-min")
let time = timeMinutes.value * 60 ;
let timeUpSound = new Audio("../audio/bells-logo-140886.mp3");
var rum = 1;

const timerUpdate = () => {
    minutes = Math.floor(time/60);
    seconds = time % 60;
    
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    timeMinutes.innerHTML = minutes;
    timeSeconds.innerHTML = seconds;

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

const startTimer = () => {
        play.style.display = "none";
        pause.style.display = "block";
        pause.style.opacity = "1";
        reset.style.opacity = "1";
        document.querySelectorAll(".timer-input").forEach((el) => (el.style.opacity = "1"));
        movingTime = setInterval (timerUpdate, 1000)
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
 */
