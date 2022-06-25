const START_BUTTON = document.getElementById("pomodoro-start");
const STOP_BUTTON = document.getElementById("pomodoro-stop");
const RESET_BUTTON = document.getElementById("pomodoro-reset");
const POMODORO_TIMER = document.getElementById("pomodoro-timer");

const startingMinutes = 25;
let time = startingMinutes * 60;
let timedInterval = null;

START_BUTTON.addEventListener("click", () => {
  timedInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    POMODORO_TIMER.innerHTML = `${minutes}:${seconds}`;
    if (time === 0) {
      clearInterval(timedInterval);
    }
    time--;
  }, 1000);
});

STOP_BUTTON.addEventListener("click", () => {
  clearInterval(timedInterval);
});

RESET_BUTTON.addEventListener("click", () => {
  POMODORO_TIMER.innerHTML = "25:00";
  time = startingMinutes * 60;
  clearInterval(timedInterval);
});
