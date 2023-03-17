const fiveMinTimer = document.getElementById("5-timer");
const tenMinTimer = document.getElementById("10-timer");
const fifteenMinTimer = document.getElementById("15-timer");
const twentyMinTimer = document.getElementById("20-timer");
const twentyFiveMinTimer = document.getElementById("25-timer");
const thirtyMinTimer = document.getElementById("30-timer");
const thirtyFiveMinTimer = document.getElementById("35-timer");
const fourtyMinTimer = document.getElementById("40-timer");
const fourtyFiveMinTimer = document.getElementById("45-timer");
const fiftyMinTimer = document.getElementById("50-timer");
const fiftyFiveMinTimer = document.getElementById("55-timer");
const sixtyMinTimer = document.getElementById("60-timer");


fiveMinTimer.addEventListener("click", () =>{
    time = 300;
    timeMinutes.innerHTML = "05";
    timeSeconds.innerHTML = "00";
})

tenMinTimer.addEventListener("click", () => {
    time = 600;
    timeMinutes.innerHTML = "10";
    timeSeconds.innerHTML = "00";
})

fifteenMinTimer.addEventListener("click", () => {
    time = 900;
    timeMinutes.innerHTML = "15";
    timeSeconds.innerHTML = "00";
})

twentyMinTimer.addEventListener("click", () => {
    time = 1200;
    timeMinutes.innerHTML = "20";
    timeSeconds.innerHTML = "00";
})

twentyFiveMinTimer.addEventListener("click", () => {
    time = 1500;
    timeMinutes.innerHTML = "25";
    timeSeconds.innerHTML = "00";
})

thirtyMinTimer.addEventListener("click", () => {
    time = 1800;
    timeMinutes.innerHTML = "30";
    timeSeconds.innerHTML = "00";
})

thirtyFiveMinTimer.addEventListener("click", () => {
    time = 2100;
    timeMinutes.innerHTML = "35";
    timeSeconds.innerHTML = "00";
})

fourtyMinTimer.addEventListener("click", () => {
    time = 2400;
    timeMinutes.innerHTML = "40";
    timeSeconds.innerHTML = "00";
})

fourtyFiveMinTimer.addEventListener("click", () => {
    time = 2700;
    timeMinutes.innerHTML = "45";
    timeSeconds.innerHTML = "00";
})

fiftyMinTimer.addEventListener("click", () => {
    time = 3000;
    timeMinutes.innerHTML = "50";
    timeSeconds.innerHTML = "00";
})

fiftyFiveMinTimer.addEventListener("click", () => {
    time = 3300;
    timeMinutes.innerHTML = "55";
    timeSeconds.innerHTML = "00";
})

sixtyMinTimer.addEventListener("click", () => {
    time = 3600;
    timeMinutes.innerHTML = "60";
    timeSeconds.innerHTML = "00";
})
