// Geting all required elements
const startBtn = document.querySelector(".start_btn button");
const infoBox = document.querySelector(".info_box");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quizBox.querySelector(".timer .timer_sec");
const timeLine = quizBox.querySelector("header .time_line");
const timeOff = quizBox.querySelector("header .time_text");

// If Start quiz button Clicked
startBtn.onclick = () => {
  infoBox.classList.add("activeInfo");
};

// if Exit button Clicked
exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo");
};

// If Continue button Clicked

continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); // hide the info box
  quizBox.classList.add("activeQuiz"); // show the quiz box
  ShowQuestions(0);
  queCounter(0);
  startTimer(15);
  startTimerLine(0);
};

var que_count = 0;
var counter;
var counterLine;
var timeValue = 15;
var TimerLine = 0;
var userScore = 0;
var steps = 25;

const nextBtn = quizBox.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
  quizBox.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  que_count = 0;
  counterLine;
  timeValue = 15;
  TimerLine = 0;
  userScore = 0;
  ShowQuestions(que_count);
  queCounter(que_count);
  clearInterval(counter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(TimerLine);
  nextBtn.style.display = "none";
};

quit_quiz.onclick = () => {
  window.location.reload();
};

// If Next Button Clicked
nextBtn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    ShowQuestions(que_count);
    queCounter(que_count);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(TimerLine);
    nextBtn.style.display = "none";
    timeOff.textContent = "Time Left";
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    showResultBox();
  }
};

// Getting questions and options from array
function ShowQuestions(index) {
  const que_text = document.querySelector(".que_text");
  var que_tag =
    "<span>" +
    questions[index].number +
    " - " +
    questions[index].question +
    "</span>";
  var option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIcon = '<div class="icon tick"><i class="ri-check-line"></i></div>';
let crossIcon = '<div class="icon cross"><i class="ri-close-line"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let AllOptions = option_list.children.length;
  if (userAns == correctAns) {
    userScore += 1;
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIcon);

    // if answer is incorrect then automtically selected the correct answer
    for (let i = 0; i < AllOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }

  // Once user selected dusabled all option
  for (let i = 0; i < AllOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }

  nextBtn.style.display = "block";
}

function showResultBox() {
  infoBox.classList.remove("activeInfo"); // hide the info box
  quizBox.classList.remove("activeQuiz"); // hide the quiz box
  result_box.classList.add("activeResult"); // show the result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 5) {
    let scoreTag =
      "<p>and congrats!, You got <span>" +
      userScore +
      "</span>out of <span>" +
      questions.length +
      "</span></p>";
    scoreText.innerHTML = scoreTag;
  } else if (userScore == 5) {
    let scoreTag =
      "<p>and nice, You got <span>" +
      userScore +
      "</span>out of <span>" +
      questions.length +
      "</span></p>";
    scoreText.innerHTML = scoreTag;
  } else {
    let scoreTag =
      "<p>and sorry, You got only <span>" +
      userScore +
      "</span>out of <span>" +
      questions.length +
      "</span></p>";
    scoreText.innerHTML = scoreTag;
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeOff.textContent = "Time Off";

      let correctAns = questions[que_count].answer;
      let AllOptions = option_list.children.length;

      for (let i = 0; i < AllOptions; i++) {
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }

      for (let i = 0; i < AllOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }

      nextBtn.style.display = "block";
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 16000 / quizBox.clientWidth);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";

    if (time > quizBox.clientWidth) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  const bottomQueCounter = quizBox.querySelector(".total_que");
  var totalQueTag =
    "<span><p>" +
    (index + 1) +
    "</p>of<p>" +
    questions.length +
    "</p>Questions</span>";
  bottomQueCounter.innerHTML = totalQueTag;
}
