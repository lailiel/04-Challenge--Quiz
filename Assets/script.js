var question = document.querySelector(".question")
var answers = document.querySelector(".answers")

var answer1 = document.querySelector("#answer1")
var answer1 = document.querySelector("#answer2")
var answer1 = document.querySelector("#answer3")
var answer1 = document.querySelector("#answer4")

var timerElement= document.querySelector(".timer-count")
var introEl = document.querySelector("#intro")
var start = document.querySelector(".start-button");
// var countEl = document.querySelector(".count");


// add var arrays here for questions and answers
var questionOptions

var score = 0;
var timer; 
var timerCount;



// function init() {
//   getHighscore();
// }


function startGame() {
  timerCount = 3;
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
  question.textContent = questionOptions
  answer1.textContent = answerOptions[x]
  answer2.textContent = answerOptions[x]
  answer3.textContent = answerOptions[x]
  answer4.textContent = answerOptions[x]
}

// -----------------------------------------------------------------------------------------

// Attach event listener to increment button element
start.addEventListener("click", startGame) 
