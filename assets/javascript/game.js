$(document).ready(function() {


var questions = [

];

var rightAnswers = 0;
var wrongAnswers = 0;
var skipped = 0;

function correct() {
  rightAnswers++;
  $("#right-answers").text(rightAnswers);
}

function wrong() {
  wrongAnswers++;
  $("#wrong-answers").text(wrongAnswers);
}

function notAnswered() {
  skipped++;
  $("#not-answered").text(notAnswered);
}

function getScore() {
  for(i = 0; i < 10; i++) {
    
    // if ($("[input[type=radio]").checked === "rightAnswer")
    // if ($("label[input[type=radio]]").val("rightAnswer")
    if ($("input[type=radio]:checked", "#myForm").val() === "rightAnswer") { //this makes sense, I think
      correct();
      console.log(rightAnswers + "right");
    }
    else if ($("input[type=radio]:checked", "#myForm").val() === "wrongAnswer") {
      wrong();
      console.log(wrongAnswers + "wrong");
    }
    else {
      notAnswered();
      console.log(skipped + "no answer")
    }
  }
};



// $("#done").click(function() {
//   getScore();
//   //Clear Interval
// });

// $('#myForm input').on('change', function() {
//    alert($('input[name=radioName]:checked', '#myForm').val()); 
// });






}) // document ready


