const volumeSlider = document.querySelector("#volume-slider")
const timerOpacitySilder = document.querySelector("#timer-opacity-slider")
const textOpacitySlider = document.querySelector("#text-opacity-slider")

//Showing Value Consts
const VOLUMEOPACITYVALUE = document.querySelector("#volume-opacity-slider-value-output")
const TIMEROPACITYVALUE = document.querySelector("#timer-opacity-slider-value-output")
const TEXTOPACITYVALUE = document.querySelector("#text-opacity-slider-value-output")


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

