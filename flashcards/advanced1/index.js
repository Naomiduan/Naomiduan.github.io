
class questionclass {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}

let myFlashcards = [];
let count = 0;

myFlashcards.push(new questionclass("What is 3+5?", "8"));
myFlashcards.push(new questionclass("What color is the sky?", "blue"));
myFlashcards.push(new questionclass("Is ice cold?", "yes"));

setup_display_event();

document.getElementById("question").innerHTML = myFlashcards[0].question;

function setup_display_event() {
  console.log("Please click question to move to the next event.");
  document.getElementById("question").onclick = function () {
    
    count++;

    // Get integer part, for example 1 / 2 = 0
    let question_index = Math.floor(count / 2);
    if (question_index >= myFlashcards.length) return;

    if (count % 2 === 1) {
      let ele = document.getElementById("answer");
      ele.innerHTML = myFlashcards[question_index].answer;
    } else {
      document.getElementById("answer").innerHTML = " ";
      document.getElementById("question").innerHTML =
        myFlashcards[question_index].question;
    }
  };
}
