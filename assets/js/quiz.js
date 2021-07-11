var questionEl = document.querySelector(".question");
var startBtnEl = document.querySelector("#start-btn");
var nextBtnEl = document.querySelector("#next-btn");
var answerBtnsEl = document.querySelector(".answer-buttons");

// use array to story questions
var questionArr = [
  // Using objects for question format
  {
    q: "Declaring variables with JavaScript is done with which keyword:",
    options: ["make", "create", "var", "craft"],
    answer: "var",
  },
  {
    q: "A webpage's structure is created using CSS.",
    options: ["true", "false"],
    answer: "false",
  },
  {
    q: "HTML is CSS.",
    options: ["true", "false"],
    answer: "false",
  },
];

function startGame() {
  console.log("Started!");
  startBtnEl.classList.add("hide");
  answerBtnsEl.classList.remove("hide");
  nextBtnEl.classList.remove("hide");
}

startBtnEl.addEventListener("click", startGame);
