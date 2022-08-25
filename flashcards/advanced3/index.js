//create a question class
class questionclass {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;

  }
}

let myFlashcards = [];
let count = 0;
document.getElementById("img1").style.display = "none";
document.getElementById("img2").style.display = "none";
document.getElementById("img3").style.display = "none";
//create question objects
myFlashcards.push(new questionclass("What is 3+5?", "8"));
myFlashcards.push(new questionclass("What color is the sky?", "blue"));
myFlashcards.push(new questionclass("Is ice cold?", "yes"));

console.log("Please hover question to see answer&pic/click to move to another event.");

setElementbyID();

  function setElementbyID(){
  document.getElementById("question").onmouseover = function () {
    
    count++;

    // Get integer part, for example 1 / 2 = 0

    if (count === 1) {
      let question_index = count - 1;
      //display the answer of the current question
      document.getElementById("img1").style.display = "inline";
      let ele = document.getElementById("answer");
      ele.innerHTML = myFlashcards[question_index].answer;
      ;
    }  else if (count === 2){
      let question_index = count - 1;
      let ele = document.getElementById("answer");
      ele.innerHTML = myFlashcards[question_index].answer;
      document.getElementById("question").innerHTML = myFlashcards[question_index].question;
      document.getElementById("answer").style.display = "none";
      document.getElementById("img1").style.display = "none";

    }else if (count === 3){
      let question_index = count - 2;
      document.getElementById("answer").style.display = "inline";
      document.getElementById("answer").innerHTML = myFlashcards[question_index].answer;
      document.getElementById("img2").style.display = "inline";
      
    }else if(count === 4){
      let question_index = count - 2;
      document.getElementById("question").innerHTML = myFlashcards[question_index].question;
      document.getElementById("img2").style.display = "none";
      document.getElementById("answer").style.display = "none";
    }else if(count === 5){
      let question_index = count - 3;
      document.getElementById("answer").innerHTML = myFlashcards[question_index].answer;
      document.getElementById("answer").style.display = "inline";
      document.getElementById("img3").style.display = "inline";
    }
  }

}




