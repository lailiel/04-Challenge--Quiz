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
    questionOp: "Inside which HTML element do we put Javascript?",
    options: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answerCor: "<script>",
  },
  {
    questionOp: "How do you write 'Hello World' in an alert box?",
    options: ["msg('Hello World')", "alertBox('Hello World')", "msgBox('Hello World')", "alert('Hello World')"],
    answerCor: "alert('Hello World')",
  },
  {
    questionOp: "How do you write an IF statement in JavaScript?",
    options: ["if i == 5 then", "if (i == 5)", "if i = 5", "if i = 5 then"],
    answerCor: "if (i == 5)",
  },
  {
    questionOp: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    options: ["if i =! 5 then", "if (i <> 5)", "if i <> 5", "if (i != 5)"],
    answerCor: "if (i != 5)",
  },
  {
    questionOp: "How does a FOR loop start?",
    options: ["for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)", "for i = 1 to 5"],
    answerCor: "for (i = 0; i <= 5; i++)",
  },
  {
    questionOp: "How do you round the number 7.25, to the nearest integer?",
    options: ["round(7.25)", "Math.round(7.25)", "rnd(7.25)", "Math.rnd(7.25)"],
    answerCor: "Math.round(7.25)",
  },
]


var score = 0;
var timer;
var timerCount;
var questionSelector = 0;
var themeCycle = 0;



function startGame() {
  timerCount = 30;
  start.disabled = true;
  introEl.setAttribute("style", "display:none;");
  quizEL.setAttribute("style", "display:flex;");
  answers.setAttribute("style", "display:flex;");
  displayList.setAttribute("style", "display:none;")
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
    if (questionSelector<=5){
      poseQuestion()
    } else if (questionSelector >5) {
      gameOver()
    }

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
  var userScore = {userName , score};

  var scoreList = []
  scoreList = JSON.parse(localStorage.getItem("scoreListKey") || "[]");
  scoreList.push(userScore)
  
for (i = 0; i < scoreDisplay.length; i++){
  scoreList.score.sort((a,b)=>a-b)
    if(a > b) return 1;
    if(a < b) return -1;
    return 0
   
}

  localStorage.setItem("scoreListKey", JSON.stringify(scoreList))
  location.reload();
}



function showHighScores() {
  displayList.setAttribute("style", "display:flex;")
  introEl.setAttribute("style", "display:none;");
  quizEL.setAttribute("style", "display:flex;");
  rightWrong.setAttribute("style", "display:none;");
  answers.setAttribute("style", "display:none;");
  submit.setAttribute("style", "display:none;");
  input.setAttribute("style", "display:none;");
  finalScore.setAttribute("style", "display:none;")

  question.textContent = "High Scores"
  var scoreDisplay = JSON.parse(localStorage.getItem("scoreListKey"));
  highScore.disabled = true;


  for (i = 0; i < scoreDisplay.length; i++) {
    var listItem = document.createElement("li")
    listItem.textContent = scoreDisplay[i].userName + " - " + scoreDisplay[i].score
    displayList.appendChild(listItem)
  }

}




function resetScores() {
  localStorage.clear("scoreList");
  location.reload()
}



function changeTheme() {
  var lightColor = ["#DDF7E3", "#EEEEEE", "#F5D5AE", "#ffa3f0"]
  var mid2Color = ["#C7E8CA", "#77D970", "#EF9A53", "#865DFF"]
  var darkColor = ["#5D9C59", "#172774", "#852999", "#2e2961"]

  document.documentElement.style.setProperty('--light', lightColor[themeCycle]);
  document.documentElement.style.setProperty('--mid-2', mid2Color[themeCycle]);
  document.documentElement.style.setProperty('--dark', darkColor[themeCycle]);
  if (themeCycle <3){
  themeCycle++} else {themeCycle=0}


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

theme.addEventListener("click", changeTheme)

// ----------------------------------------------------------------------------------------
// add score display?