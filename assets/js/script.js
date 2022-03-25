var questionEl = document.querySelector(".question");
var answerBtnsEl = document.querySelector(".answer-buttons");
var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");
var trueBtnEl = document.querySelector(".true-btn");
var falseBtnEl = document.querySelector(".false-btn");
var notifyHeadingEl = document.querySelector(".notify-h3");

var score = 0;
var currentIndex = 0;

// use array to story questions
var questionArr = [
  { q: "CSS stands for Cannot Stop Styling.", a: "false" },
  { q: "CSS stands for Cascading Style Sheets.", a: "true" },
  { q: "JavaScript cannot interact with HTML", a: "false" },
  { q: "HTML lacks style.", a: "true" },
  { q: "HTML lacks structure", a: "false" },
];

function startGame() {
  startBtnEl.classList.add("hide");
  answerBtnsEl.classList.remove("hide");
  nextBtnEl.classList.remove("hide");
  displayQuestion(currentIndex);
}

var answerHandler = function (e) {
  var answer = e.target.innerText.toLowerCase();
  console.log(answer);
  displayQuestion(answer);
};

var displayQuestion = function (a) {
  answer = a;
  var currentQuestion = questionArr[currentIndex].q;
  console.log(currentQuestion);
  questionEl.innerText = currentQuestion;

  if (answer === questionArr[currentIndex].a) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  currentIndex++;
  displayQuestion();
};

// var nextQuestion = function (answer) {};

trueBtnEl.addEventListener("click", answerHandler);
falseBtnEl.addEventListener("click", answerHandler);
// nextBtnEl.addEventListener("click", nextQuestion);
startBtnEl.addEventListener("click", startGame);
