let numberInputSec = document.querySelector("#timer-number-sec")
let numberInputMin = document.querySelector("#timer-number-min")

const inputValueOnFocusSec = () =>{
    numberInputSec.style.opacity = "1"
}

const inputValueOnFocusMin = () => {
    numberInputMin.style.opacity = "1"
}

const inputValueOnBlurSec = () =>{
    numberInputSec.style.opacity = "0.2"
}

const inputValueOnBlurMin = () =>{
    numberInputMin.style.opacity = "0.2"
}