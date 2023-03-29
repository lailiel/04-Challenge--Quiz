var introEl = document.querySelector(".starter-layout")
var quizEL = document.querySelector(".quiz-layout")

var question = document.querySelector("#question")
var answers = document.querySelector(".answers")

var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var answer4 = document.querySelector("#answer4")
var rightWrong = document.querySelector("#right-wrong")
var submit = document.querySelector("#submit")
var input = document.querySelector("#input")
var finalScore = document.querySelector("#finalscore")
var displayList = document.querySelector("#score-list")


var timerElement = document.querySelector(".timer-count")
var start = document.querySelector(".start-button")
var reset = document.querySelector(".reset");
var highScore = document.querySelector(".high-score");
var theme = document.querySelector(".theme")

// add var arrays here for questions and answers 4 is good, more if wanted.
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



function startGame() {
  timerCount = 30;
  start.disabled = true;
  introEl.setAttribute("style", "display:none;");
  quizEL.setAttribute("style", "display:flex;");
  startTimer()
  poseQuestion()
}

function gameOver() {
  question.textContent = "GAME OVER";
  finalScore.textContent = "You earned " + score + " points"
  finalScore.setAttribute("style", "display:flex;")
  answers.setAttribute("style", "display:none;");
  rightWrong.setAttribute("style", "display:none;");
  submit.setAttribute("style", "display:flex;");
  input.setAttribute("style", "display:flex;");

}

function correct() {
  rightWrong.textContent = "Correct!"
}

function incorrect() {
  rightWrong.textContent = "Wrong! Try again."
}

function startTimer() {
  timer = setInterval(function () {
    if (timerCount >= 1)
      timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function poseQuestion() {
  answer1.value = questionArray[questionSelector].options[0]
  answer2.value = questionArray[questionSelector].options[1]
  answer3.value = questionArray[questionSelector].options[2]
  answer4.value = questionArray[questionSelector].options[3]

  question.textContent = questionArray[questionSelector].questionOp

  answer1.textContent = questionArray[questionSelector].options[0]
  answer2.textContent = questionArray[questionSelector].options[1]
  answer3.textContent = questionArray[questionSelector].options[2]
  answer4.textContent = questionArray[questionSelector].options[3]
}


function timerPenalty() {
  if (timerCount >= 3) {
    timerCount = timerCount - 3
  }
  else { timerCount = 0 }
}

function checkanswer(event) {
  event.preventDefault()
  rightWrong.setAttribute("style", "display:flex;");
  if (event.target.value.trim() == questionArray[questionSelector].answerCor.trim()) {
    score++
    correct()
    questionSelector++
    poseQuestion()

  } else {
    incorrect()
    timerPenalty()
  }
}


function logScore() {
  var userName = document.querySelector("#input").value.trim();
  if (userName == null) {
    return
  }
  var userScore = userName + " - " + score;

  var scoreList = []
  scoreList =  JSON.parse(localStorage.getItem("scoreList") || "[]");
  scoreList.push(userScore)
  localStorage.setItem("scoreList", JSON.stringify(scoreList))
  location.reload();
}



//this needs work
function showHighScores() {
  displayList.setAttribute("style", "display:flex;")
  introEl.setAttribute("style", "display:none;");
  quizEL.setAttribute("style", "display:flex;");
  rightWrong.setAttribute("style", "display:none;");
  submit.setAttribute("style", "display:none;");
  input.setAttribute("style", "display:none;");
  finalScore.setAttribute("style", "display:none;")
  question.textContent = "High Scores"
  var scoreDisplay = JSON.parse(localStorage.getItem("scoreList"));
  
  for ( i= 0; scoreDisplay.length; i++){
    var listItem = document.createElement("li")
    listItem.textContent = scoreDisplay[i]
    displayList.appendChild()
  }

}




function resetScores() {
  localStorage.clear("scoreList");
}



// -----------------------------------------------------------------------------------------


start.addEventListener("click", startGame)

answer1.addEventListener("click", checkanswer)
answer2.addEventListener("click", checkanswer)
answer3.addEventListener("click", checkanswer)
answer4.addEventListener("click", checkanswer)

submit.addEventListener("click", logScore)

reset.addEventListener("click", resetScores)

highScore.addEventListener("click", showHighScores)

// theme.addEventListener("click", __)

// ----------------------------------------------------------------------------------------
// add score display?