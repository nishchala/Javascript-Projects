let currTime = document.getElementById("time");
let splitTime = currTime.textContent.split(":");
let message = document.getElementById("warning");

window.addEventListener("DOMContentLoaded", () => {
  currTime.textContent = "00:00";
});

let startButton = document.getElementById("start");
let startFlag = 0;
let timer = 0;
startButton.addEventListener("click", () => {
  if (startFlag === 1) message.textContent = "Timer has already started.";
  else {
    timer = setInterval(() => {
      startFlag = 1;
      message.textContent = "";
      splitTime = currTime.textContent.split(":");
      let seconds = parseInt(splitTime[1]);
      let minutes = parseInt(splitTime[0]);
      seconds += 1;
      if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
      }
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;
      currTime.textContent = `${minutes}:${seconds}`;
    }, 1000);
  }
});

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", () => {
  if (startFlag === 0) {
    message.textContent = "Timer has not started.";
  } else {
    startFlag = 0;
    clearInterval(timer);
    message.textContent = "";
    
  }
});

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  if (startFlag === 1) {
    startFlag = 0;
    clearInterval(timer);
    message.textContent = "";
  }
  currTime.textContent = "00:00";
});
