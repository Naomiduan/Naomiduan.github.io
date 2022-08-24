//set all the elementes except for question1 to be invisible


document.getElementById("answer1").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("question2").style.display = "none";
document.getElementById("question3").style.display = "none";
document.getElementById("answer3").style.display = "none";

//set counter for different actions , click once for answer, click twicfe for the next event;
let count1 =1 ;
let count2 =1 ;
//logic for the display for question1
document.getElementById('question1').onmousedown = function() { 
  count1 ++;
  if (count1 === 2){
    document.getElementById("answer1").style.display = "inline";
    console.log("you action is detected");
  }else{
    document.getElementById("question2").style.display = "inline";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("question1").style.display = "none";
  }
}
//logic for the display for question2

  document.getElementById('question2').onmousedown = function() { 
    count2 ++;
    if (count2 === 2){
      document.getElementById("answer2").style.display = "inline";

    }else{
      document.getElementById("question3").style.display = "inline";
      document.getElementById("answer2").style.display = "none";
      document.getElementById("question2").style.display = "none";
    }
    document.getElementById("answer2").style.display = "inline";
    }

//logic for the display for question3
    document.getElementById('question3').onmousedown = function() { 

      document.getElementById("answer3").style.display = "inline";

      }
