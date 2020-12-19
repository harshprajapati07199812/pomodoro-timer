// var lb = 0;
// var sb = 1;
const appendMin = document.getElementById("min");
const appendSec = document.getElementById("sec");
buttonStart = document.getElementById("bottom1");
buttonStop = document.getElementById("bottom2");
buttonReset = document.getElementById("bottom3");
button = document.getElementsByClassName("top_btn");
var sec;
var flag;
var min;
var input;
var interval;

button[0].onclick = function () {
  // console.log("hi");
  flag = 0;
  pomo(flag);
};

button[1].onclick = function () {
  // console.log("hi");
  flag = 2;
  pomo(flag);
};

button[2].onclick = function () {
  // console.log("hi");
  flag = 1;
  pomo(flag);
};

buttonStart.onclick = function () {
  // console.log("hi");
  flag = 0;
  pomo(flag);
};

function pomo(flag) {
  if (flag == 1) {
    sec = 0;
    min = 10;
    flag = 0;

    interval = setInterval(Timer, 1000);
  } else if (flag == 2) {
    sec = 0;
    min = 5;
    flag = 0;

    interval = setInterval(Timer, 1000);
  } else {
    sec = 0;
    // min = parseInt(input);
    min = 25;

    interval = setInterval(Timer, 1000);
  }
}
function Timer() {
  if (sec == 0) {
    min = min - 1;
    sec = 59;
  } else {
    sec = sec - 1;
  }
  if (sec.toString().length == 1) {
    sec = "0" + sec.toString();
    // console.log
  }
  if (min.toString().length == 1) {
    min = "0" + min.toString();
  }
  if (min == "00" && sec == "00") {
    // appendMin.innerText = "00";
    // appendSec.innerText = "00";
    clearInterval(interval);
  }

  // console.log(min.toString() + ":" + sec.toString());
  appendMin.innerText = min.toString();
  appendSec.innerText = sec.toString();
}

buttonStop.onclick = function () {
  // console.log("stop");
  clearInterval(interval);
};

buttonReset.onclick = function () {
  // console.log("reset");
  appendMin.innerText = "00";
  appendSec.innerText = "00";
  clearInterval(interval);
};
