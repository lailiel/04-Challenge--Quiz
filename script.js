
var count = 0;
var score = 0;
var question = document.querySelector("#quesion")
var answers = document.querySelector("#answers")
//  Select increment and decrement button elements
var start = document.querySelector("#start-button");
var countEl = document.querySelector("#count");

// Updates count on page
function setCounterText() {
  countEl.textContent = count;
}
// Attach event listener to increment button element
start.addEventListener("click", function() {
//   count++;
//   setCounterText();
});





function displayMessage
// update this with "game over"

function countdown() {
    var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }