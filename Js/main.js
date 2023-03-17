// Background

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
