const button = document.querySelector(".button");

let themeIndex = 1;
let color = "#0a0a0a";

const colorChange = () => {
  if (themeIndex === 1) {
    document.getElementById("body").style.backgroundColor = "#000000";
    document.getElementById("reset").src = "./Control-images/Reset-white.png";
    document.getElementById("start").src = "./Control-images/Play-white.png";
    document.getElementById("pause").src = "./Control-images/Pause-white.png";
    document.getElementById("nav-open-button").src =
      "./Control-images/down-arrow-white.png";
    document
      .querySelectorAll(".color")
      .forEach((el) => (el.style.color = "#FFFFFF"));
    themeIndex++;
    color = "#FFFFFF";
  } else if (themeIndex === 2) {
    document.getElementById("body").style.backgroundColor = "#d3d3d3";
    document.getElementById("reset").src =
      "./Control-images/Reset-spacegray.png";
    document.getElementById("start").src =
      "./Control-images/Play-spacegray.png";
    document.getElementById("pause").src =
      "./Control-images/Pause-spacegray.png";
    document.getElementById("nav-open-button").src =
      "./Control-images/down-arrow-spacegray.png";
    document
      .querySelectorAll(".color")
      .forEach((el) => (el.style.color = "#343d46"));

    themeIndex++;
    color = "#343d46";
  } else if (themeIndex === 3) {
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("reset").src =
      "./Control-images/Reset-jetblack.png";
    document.getElementById("start").src = "./Control-images/Play-jetblack.png";
    document.getElementById("pause").src =
      "./Control-images/Pause-jetblack.png";
    document.getElementById("nav-open-button").src =
      "./Control-images/down-arrow-jetblack.png";
    document
      .querySelectorAll(".color")
      .forEach((el) => (el.style.color = "#0a0a0a"));
    themeIndex -= 2;
    color = "#0a0a0a";
  } else {
    alert("You got a bug, reload the page or report it");
  }
};
