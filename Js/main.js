// Background
let openNavBarAnimationInterval;
var openNavBarAnimationValue = 0;
const urlBackgroundInput = document.querySelector("#background-url-input");

urlBackgroundInput.addEventListener("input", () => {
  document.body.style[
    "background-image"
  ] = `url("${urlBackgroundInput.value}")`;
  urlBackgroundInput.value = "";
});

// Navbar

const hideNavBar = () => {
  document.querySelector("#nav-bar").style.display = "none";
  document.querySelector(".open-nav-bar-button").style.display = "flex";
};

const openNavBar = () => {
  document.querySelector("#nav-bar").style.display = "flex";
  document.querySelector(".open-nav-bar-button").style.display = "none";
};


//Open settings

const settingsButton = document.querySelector("#settings-button")
const settingsTab = document.querySelector("#settings-background")
const closeSettingsButton = document.querySelector("#close-settings-button")

var i = 0;

settingsButton.addEventListener("click", ()=> {
  if (i === 0){
    settingsTab.style.display = "block"
    i++
  } else if (i === 1){
    settingsTab.style.display = "none"
    i--
  } else {
    alert("you got a bug, tell Rixen!")
  }
})

closeSettingsButton.addEventListener("click", () =>{
  settingsTab.style.display = "none"
})