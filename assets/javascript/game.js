$(document).ready(function() {


var questions = [

];

var rightAnswers = 0;
var wrongAnswers = 0;
var skipped = 0;

function correct() {
  rightAnswers++;
  sessionStorage.setItem("answer-right", rightAnswers);
  // $("#right-answers").text(rightAnswers);
}

function wrong() {
  wrongAnswers++;
  sessionStorage.setItem("answer-wrong", wrongAnswers);
  // $("#wrong-answers").text(wrongAnswers);
}

function notAnswered() {
  skipped++;
  sessionStorage.setItem("no-answer", skipped)
  // $("#not-answered").text(notAnswered);
}



// I think this needs to change to a switch switch($("input[type=radio]:checked", "#myForm").val())
// case: "rightAnswer" {
//      correct();
//      break;}
function getScore() {
  for(i = 0; i < 2; i++) {
    
    // if ($("[input[type=radio]").checked === "rightAnswer")
    // if ($("label[input[type=radio]]").val("rightAnswer")
    if ($("input[type=radio]:checked", "#myForm").val() === "rightAnswer") { //this makes sense, I think
      correct();
      // localStorage.setItem("answer-right", rightAnswers);
      console.log(rightAnswers + "right");
      break;
    }
    else if ($("input[type=radio]:checked", "#myForm").val() === "wrongAnswer") {
      wrong();
      // Wrong answers need to be divided by number of extra wrong answers per loop, probably 2 or 3
      // Can this be accomplished as an algorithm using %?
      console.log(wrongAnswers + "wrong");
      break;
    }
    else {
      notAnswered();
      console.log(skipped + "no answer");
      break;
    }
  }
};



$("#done").click(function() {
  getScore();  
  window.location.href='results-page.html';
  //Clear Interval
});

$("#results-page").load('results-page.html', function() {
  $("#right-answers").html("Right Answers: " + sessionStorage.getItem("answer-right"));
  $("#wrong-answers").html("Wrong Answers: " + sessionStorage.getItem("answer-wrong"));
  $("#no-answer").html("Not Answered: " + sessionStorage.getItem("no-answer"));
  //Load in wrong and not answered here
})

  // Could add catch for null value being returned by local storage
  // if(sessionStorage.getItem("answer-right")) {$("#right-answers").html("Right Answers: " + 0)}


// Try again button needs to blow away all the session storage 







// $('#myForm input').on('change', function() {
//    alert($('input[name=radioName]:checked', '#myForm').val()); 
// });






}); // document ready


