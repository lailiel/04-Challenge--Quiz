var question = document.querySelector("#question")
var answers = document.querySelector(".answers")

var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var rightWrong = document.querySelector("#right-wrong")

var timerElement= document.querySelector(".timer-count")
var introEl = document.querySelector("#intro")
var start = document.querySelector(".start-button");

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
    answerCor: "answer 9",
  },
]


var score = 0;
var timer; 
var timerCount;
var questionSelector = 0;


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
  start.disabled = false;
  introEl.textContent = "You earned " + score + " points" 
  introEl.setAttribute("style", "visibility:visible;");
  answers.setAttribute("style", "visibility:hidden;");
  rightWrong.setAttribute("style", "visibility:hidden;");
}

function correct(){
  rightWrong.textContent= "Correct!"
}

function incorrect(){
  rightWrong.textContent= "Wrong! Try again."
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
  answer1.value= questionArray[questionSelector].options[0]
  answer2.value= questionArray[questionSelector].options[1]
  answer3.value= questionArray[questionSelector].options[2]
  answer4.value= questionArray[questionSelector].options[3]

  question.textContent = questionArray[questionSelector].questionOp
  answer1.textContent = questionArray[questionSelector].options[0]

  answer2.textContent = questionArray[questionSelector].options[1]
  
  answer3.textContent = questionArray[questionSelector].options[2]

  answer4.textContent = questionArray[questionSelector].options[3]

  questionSelector++
}

// fix answer button format
// add whatever to keep timer from going negative
// figure out the correct call/tag whatever to check clicked text against answer
function checkanswer(event){
  console.log(event.target.value)
  if (event.target.value === questionArray[questionSelector].answerCor) {
    score++
    correct()
    poseQuestion()
    console.log("score")
    
  } else {
    timerCount = timerCount -3
    incorrect()
  }
}

// ADD LOG SCORE STUFF

// -----------------------------------------------------------------------------------------


start.addEventListener("click", startGame) 

answer1.addEventListener("click", checkanswer)
answer2.addEventListener("click", checkanswer)
answer3.addEventListener("click", checkanswer)
answer4.addEventListener("click", checkanswer)