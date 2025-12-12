let btnContainer = document.querySelector(".btn-container");
let currentTime = document.querySelector(".para");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function display(hours, minutes, seconds) {
  currentTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } :${seconds < 10 ? `0${seconds}` : seconds}`;
}
function handleClick(e) {
  let button = e.target.name;
  if (button === "start") {
    timer = setInterval(() => {
      seconds++;
      if (seconds > 58) {
        seconds = 0;
        minutes++;
        if (minutes > 58) {
          minutes = 0;
          hours++;
        }
      }
      display(hours, minutes, seconds);
    }, 1000);
  }
  if (button === "stop") {
    clearInterval(timer);
  }
  if (button === "reset") {
    hours = minutes = seconds = 0;
    clearInterval(timer);
    display(hours, minutes, seconds);
  }
}

btnContainer.addEventListener("click", handleClick);
