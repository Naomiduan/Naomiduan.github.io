//create a question class
class questionclass {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let myFlashcards = [];
let count = 0;
//create question objects
myFlashcards.push(new questionclass("What is 3+5?", "8"));
myFlashcards.push(new questionclass("What color is the sky?", "blue"));
myFlashcards.push(new questionclass("Is ice cold?", "yes"));

setup_display_event();
// Intialize the question for HTML
document.getElementById("question").innerHTML = myFlashcards[0].question;

// This function is to count the number of clicking events, and dislay answer and question intermittently
function setup_display_event() {
  console.log("Please hover question to see answer/move to another event.");
  document.getElementById("question").onmouseover = function () {
    
    count++;

    // Get integer part, for example 1 / 2 = 0
    let question_index = Math.floor(count / 2);
    if (question_index >= myFlashcards.length) return;

    if (count % 2 === 1) {
      //display the answer of the current question
      let ele = document.getElementById("answer");
      ele.innerHTML = myFlashcards[question_index].answer;
    } else {
      //display next question
      document.getElementById("answer").innerHTML = " ";
      document.getElementById("question").innerHTML =
        myFlashcards[question_index].question;
    }
  };
}
