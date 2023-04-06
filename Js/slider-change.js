const volumeSlider = document.querySelector("#volume-slider")
const timerOpacitySilder = document.querySelector("#timer-opacity-slider")
const textOpacitySlider = document.querySelector("#text-opacity-slider")
const controlOpacitySlider = document.querySelector("#control-opacity-slider")
const taskOpacitySlider = document.querySelector("#task-opacity-slider")

//Showing Value Consts
const VOLUMEOPACITYVALUE = document.querySelector("#volume-opacity-slider-value-output")
const TIMEROPACITYVALUE = document.querySelector("#timer-opacity-slider-value-output")
const TEXTOPACITYVALUE = document.querySelector("#text-opacity-slider-value-output")
const CONTROLOPACITYVALUE = document.querySelector("#control-opacity-slider-value-output")
const TASKOPACITYVALUE = document.querySelector("#task-opacity-slider-value-output")

//Audio Volume Change
volumeSlider.addEventListener("input", () =>{
    var volumeValue = volumeSlider.value * 0.01;
    timeUpSound.volume = volumeValue;
    var volumeOutputValue = volumeValue * 100
    VOLUMEOPACITYVALUE.innerHTML = volumeOutputValue.toFixed(0) ;
})



//Opacity Change
timerOpacitySilder.addEventListener("input", () => {
    var timerOpacityValue = timerOpacitySilder.value * 0.01;
    document
    .querySelectorAll(".time-number")
    .forEach((el) => (el.style.opacity = timerOpacityValue));
    var timerOpacityOutputValue = timerOpacityValue * 100
    TIMEROPACITYVALUE.innerHTML = timerOpacityOutputValue.toFixed(0) 
})

textOpacitySlider.addEventListener("input", () => {
    var textOpacityValue = textOpacitySlider.value * 0.01;
    document
    .querySelectorAll(".text-opacity")
    .forEach((el) => (el.style.opacity = textOpacityValue));
    var textOpacityOutputValue = textOpacityValue * 100
    TEXTOPACITYVALUE.innerHTML = textOpacityOutputValue.toFixed(0) 
})

controlOpacitySlider.addEventListener("input", () => {
    var controlOpacityValue = controlOpacitySlider.value * 0.01;
    document
    .querySelectorAll(".control-buttons")
    .forEach((el) => (el.style.opacity = controlOpacityValue));
    var controlOpacityOutputValue = controlOpacityValue * 100
    CONTROLOPACITYVALUE.innerHTML = controlOpacityOutputValue.toFixed(0) 
})

taskOpacitySlider.addEventListener("input", () => {
    var taskOpacityValue = taskOpacitySlider.value * 0.01;
    document
    .querySelectorAll(".task-opacity")
    .forEach((el) => (el.style.opacity = taskOpacityValue));
    var taskOpacityOutputValue = taskOpacityValue * 100
    TASKOPACITYVALUE.innerHTML = taskOpacityOutputValue.toFixed(0) 
})

