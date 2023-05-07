const CENTER = document.querySelector("#position-center")
const TOP = document.querySelector("#position-top")

let timer = document.querySelector("#first")
let timerValue = document.querySelector("#second")

CENTER.addEventListener("click", () =>{
    CENTER.style.fontWeight = 900;
    TOP.style.fontWeight = 400;

    timer.style.gridRow = "second/third";
    timerValue.style.gridRow = "first/second";
    timerValue.style.marginTop = "6rem";
    document.querySelector(".header-container").style.margin = 0;
})

TOP.addEventListener("click", () =>{
    TOP.style.fontWeight = 900;
    CENTER.style.fontWeight = 400;
    
    
    timer.style.gridRow = "first/second";
    timerValue.style.gridRow = "second/third";
    timerValue.style.marginTop = "0";
    document.querySelector(".header-container").style.margin = "2rem";
})

