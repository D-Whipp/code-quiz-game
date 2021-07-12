var timerEl = document.querySelector(".time-left");
var notifyHeadingEl = document.querySelector(".notify-h3");
var startBtnEl = document.querySelector(".start-btn");

// Timer counting down from 100 seconds
function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft >= 1) {
      timerEl.textContent = "Time left: " + timeLeft;
    }
    if (timeLeft === 0) {
      timerEl.textContent = "Time's up!";
      notifyHeadingEl.textContent = "Game Over!";
      clearInterval(timeInterval);
    }
  }, 1000);
}

startBtnEl.onclick = countdown;
