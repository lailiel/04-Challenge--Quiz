// var question = document.querySelector("#quesion")
// var answers = document.querySelector("#answers")
var timerElement= document.querySelector(".timer-count")

var start = document.querySelector(".start-button");
// var countEl = document.querySelector(".count");


// var score = 0;
var timer; 
var timerCount = 30;

// add var arrays here for questions and answers

// function init() {
//   getHighscore();
// }


function startGame() {
  timerCount = 30;
  start.disabled = true;
  // poseQuestion()
  startTimer()
}



function startTimer() {
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      // gameOver();
    }
  }, 1000);
}


// -----------------------------------------------------------------------------------------

// Attach event listener to increment button element
start.addEventListener("click", startGame) 
