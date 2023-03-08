let num = 1;
const button = document.querySelector(".button");
button.addEventListener("click", colorChange);


function colorChange() {
  if (num === 1) {
    document.getElementById("body").style.backgroundColor = "#000000";
    document.getElementById("reset").src="./Control-images/Reset-white.png";
    document.getElementById("start").src="./Control-images/Play-white.png";
    document.getElementById("pause").src="./Control-images/Pause-white.png";

    num = num + 1;
    
  } 

  else if (num === 2) {
    document.getElementById("body").style.backgroundColor = "#d3d3d3";
    document.getElementById("reset").src="./Control-images/Reset-spacegray.png";
    document.getElementById("start").src="./Control-images/Play-spacegray.png";
    document.getElementById("pause").src="./Control-images/Pause-spacegray.png";
    
    num = num + 1;

  } 
  else if (num === 3) {
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("reset").src="./Control-images/Reset-jetblack.png";
    document.getElementById("start").src="./Control-images/Play-jetblack.png";
    document.getElementById("pause").src="./Control-images/Pause-jetblack.png";
    num = num - 2;
  } 

  else {
    alert("You got a bug, reload the page or report it")
  }
}


