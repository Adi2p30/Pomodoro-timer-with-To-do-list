const playButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const timerChangeSettings = document.querySelector(".timer-settings-list")
const timeMinutes = document.querySelector("#timer-number-min");
const timeSeconds = document.querySelector("#timer-number-sec");
const timeUpSound = new Audio("../audio/clock-alarm-8761.mp3");
let time = 1500;
let isRunning = true;
let minutes = 00;
let seconds = 00;
let movingTime;

const SECONDS_IN_MINUTES = 60;

const playingSound = () =>{
  timeUpSound.play();
}

const updateTimer = () => {

  minutes = Math.floor(time / SECONDS_IN_MINUTES);
  seconds = time % SECONDS_IN_MINUTES;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  timeMinutes.innerHTML = minutes;
  timeSeconds.innerHTML = seconds;
  document.querySelector("title").innerHTML = minutes + ":" + seconds + " " + "Custom-Pomodoro";

  if (time === 0) {
    timeUpSound.play();
    timerChangeSettings.style.display = "flex";
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    document.querySelector("title").innerHTML = "Custom-Pomodoro";
    resetButton.style.opacity = "0.1"; 
    clearInterval(movingTime);
    timeMinutes.innerHTML = "00";
    timeSeconds.innerHTML = "00";
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
  timerChangeSettings.style.display = "none";
  } else {
    alert("Please select a time!")
  }
};

const pauseTimer = () => {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  timerChangeSettings.style.display = "flex";
  clearInterval(movingTime);
  timeMinutes.innerHTML = minutes;
  timeSeconds.innerHTML = seconds;
};

const resetTimer = () => {
  playButton.style.display = "block";
  pauseButton.style.display = "none";
  timerChangeSettings.style.display = "flex";
  clearInterval(movingTime);
  timeSeconds.innerHTML = "00";
  timeMinutes.innerHTML = "00";
  time = 0;
  document.querySelector("title").innerHTML = "Custom-Pomodoro";
};

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

