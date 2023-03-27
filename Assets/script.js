var question = document.querySelector("#question")
var answers = document.querySelector(".answers")

var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")

var timerElement= document.querySelector(".timer-count")
var introEl = document.querySelector("#intro")
var start = document.querySelector(".start-button");
// var countEl = document.querySelector(".count");


// add var arrays here for questions and answers
var questionArray = [
  {
    questionOp: "Question 1-answer 2 is correct",
    options: ["answer 1", "answer 2", "answer 3", "answer 4"],
    answerCor: "answer 2",
  },
  {
    questionOp: "Question 2-answer 8 is correct",
    options: ["answer 5", "answer 6", "answer 7", "answer 8"],
    answerCor: "answer 8",
  },
  {
    questionOp: "Question 3-answer 9 is correct",
    options: ["answer 9", "answer 10", "answer 11", "answer 12"],
    answerCor: "answer 8",
  },
]


var score = 0;
var timer; 
var timerCount;



// function init() {
//   getHighscore();
// }


function startGame() {
  timerCount = 30;
  start.disabled = true;
  startTimer()
  poseQuestion()
}

function gameOver() {
  question.textContent = "GAME OVER";
  startButton.disabled = false;
  introEl.setAttribute("style", "visibility:hidden;");
  answers.setAttribute("style", "visibility:hidden;");
}


function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function poseQuestion(){
  introEl.setAttribute("style", "visibility:hidden;");
  answers.setAttribute("style", "visibility:visible;");
  // for (let i = 0; i < quesionArray.length; i++)
  question.textContent = questionArray[0].questionOp
  answer1.textContent = questionArray[0].options[0]
  answer2.textContent = questionArray[0].options[1]
  answer3.textContent = questionArray[0].options[2]
  answer4.textContent = questionArray[0].options[3]
}

// -----------------------------------------------------------------------------------------

// Attach event listener to increment button element
start.addEventListener("click", startGame) 
