var questionEl = document.querySelector(".question");
var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");
var answerBtnsEl = document.querySelector(".answer-buttons");
var trueBtn = document.querySelector(".true-btn");
var falseBtn = document.querySelector(".false-btn");
var notifyHeadingEl = document.querySelector(".notify-h3");

var score = 0;

// use array to story questions
var questionArr = [
  { q: "CSS stands for Cannot Stop Styling.", a: false },
  { q: "CSS stands for Cascading Style Sheets.", a: true },
  { q: "JavaScript cannot interact with HTML", a: false },
  { q: "HTML lacks style.", a: true },
  { q: "HTML lacks structure", a: false },
];

function startGame() {
  console.log("Started!");
  startBtnEl.classList.add("hide");
  answerBtnsEl.classList.remove("hide");
  nextBtnEl.classList.remove("hide");
  answerHandler();
}

var answerHandler = function () {
  for (var i = 0; i < questionArr.length; i++) {
    questionEl.innerText = questionArr[i].q;
    var answer = confirm("click ok for true");
    console.log("hi");

    if (answer === questionArr[i].a) {
      score++;
      notifyHeadingEl.innerText = "Correct";
    }
  }
};

startBtnEl.addEventListener("click", startGame);
