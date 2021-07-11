var timerEl = document.querySelector(".time-left");
var notifyHeadingEl = document.querySelector(".notify-h3");
var startBtn = document.querySelector(".start-btn");

// Timer counting down from 100 seconds
function countdown() {
  var timeLeft = 3;

  var timeInterval = setInterval(function () {
    timeLeft--;
    if (timeLeft >= 1) {
      timerEl.textContent = "Time left: " + timeLeft;
    }
    if (timeLeft === 0) {
      timerEl.textContent = "Time's up!";
      notifyHeadingEl.textContent = "Game Over!";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

startBtn.onclick = countdown;