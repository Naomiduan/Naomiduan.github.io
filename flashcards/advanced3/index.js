//create a question class
class questionclass {
  constructor(question, answer,pic) {
    this.question = question;
    this.answer = answer;
    this.pic = pic;
  }
}

let myFlashcards = [];
let count = 0;

var img1 = document.createElement("img1");
img.src = "math.png";
var img2 = document.createElement("img2");
img.src = "sky.png";
var img3 = document.createElement("img3");
img.src = "ice.png";


//create question objects
myFlashcards.push(new questionclass("What is 3+5?", "8", pic1));
myFlashcards.push(new questionclass("What color is the sky?", "blue", pic2));
myFlashcards.push(new questionclass("Is ice cold?", "yes", pic3));

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
      let pic = document.getElementById("img1");
      pic.innerHTML = img1;
      
    } else {
      //display next question
      document.getElementById("answer").innerHTML = " ";
      document.getElementById("question").innerHTML =
        myFlashcards[question_index].question;
    }
  };
}
