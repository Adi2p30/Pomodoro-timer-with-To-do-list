const volumeSlider = document.querySelector("#volume-slider")


//Audio Volume Change
volumeSlider.addEventListener("input", () =>{
    var volumeValue = volumeSlider.value * 0.01;
    timeUpSound.volume = volumeValue;
})

