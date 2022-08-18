
const questionObject = {
  question: 'What is my question?',
  answer: 'This is my answer',
  displayQuestion: function () {
    alert( this.question );
  },
  displayAnswer: function () {
    alert( this.answer );
  }
}


class question {
  // A constructor is a special function used to create an instance of the class
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    // We will set this to true when answered correctly.
    this.correct = false;
  }
}


let myFlashcards = [];

myFlashcards.push(new question('What is 3+5?', '8'));
myFlashcards.push(new question('What color is the sky?', 'blue'));
myFlashcards.push(new question('Is ice cold?', 'yes'));


for (let i = 0; i < myFlashcards.length; i++){
  console.log(myFlashcards[i].question);
  console.log(myFlashcards[i].answer);
}
