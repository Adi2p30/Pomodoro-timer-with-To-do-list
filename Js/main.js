// Background
let openNavBarAnimationInterval;
var openNavBarAnimationValue = 0;
const urlBackgroundInput = document.querySelector("#background-url-input");
const soundTesting = document.querySelector("#soundTesting")

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
  clearInterval(openNavBarAnimationInterval);
};

const openNavBar = () => {
  document.querySelector("#nav-bar").style.display = "flex";
  document.querySelector(".open-nav-bar-button").style.display = "none";
  openNavBarAnimationInterval = setInterval(openNavBarAnimation, 1000);
};


//Open Nav Bar Button animation

/* const openNavBarAnimation = () =>{
  if(openNavBarAnimationValue =0){
    document.querySelector(".open-nav-bar-button").style.transform = "scale(1.5)";
    openNavBarAnimationValue = openNavBarAnimationValue++;
  } else if (openNavBarAnimationValue = 1){
    document.querySelector(".open-nav-bar-button").style.transform = "scale(1)";
    openNavBarAnimationValue = openNavBarAnimationValue--;
  } else {
    alert("You got a bug, report it!")
  }
  }
 */


