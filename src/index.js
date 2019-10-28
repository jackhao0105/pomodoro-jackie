// coded by @jackhao0105 (codepen)  / @jackhao0105 (github)

/** NOTES:
 Pure JavaScripts
**/

// DECLARE VARIABLES BREAKLENGTH
let breakInc = document.getElementById('break-increment');
let breakDec = document.getElementById('break-decrement');
let breakLength = document.getElementById('break-length');
let breakNum = parseInt(breakLength.innerHTML);

// DECLARE VARIABLES SESSION LENGTH
let sessionInc = document.getElementById('session-increment');
let sessionDec = document.getElementById('session-decrement');
let sessionLength = document.getElementById('session-length');
let sessionNum = parseInt(sessionLength.innerHTML);

// BOARD BUTTON
let start = document.querySelector('.start');
let reset = document.querySelector('.reset');
let timer = document.querySelector('.timer');
let wrapTimer = document.getElementById('wrap-timer');

// SWITCH THEME
let change = document.querySelector('.change');
let clock = document.getElementById('clock');

// Display Number Time Left
function addLeadingZeroes(time) {
  return time < 10 ? `0${time}` : time;
}

let secondZero = 0;
let loop = 0;
let timeLeft;
let result = `${addLeadingZeroes(sessionNum)}:${addLeadingZeroes(secondZero)}`;
timer.innerText = result;

//** RESET BUTTON
function resetTimer() {
  loop = 0;
  breakNum = 5;
  sessionNum = 25;
  breakLength.textContent = 5;
  sessionLength.textContent = 25;
  result = `${addLeadingZeroes(sessionNum)}:${addLeadingZeroes(secondZero)}`;
  timer.innerText = result;
  btnReset();
}

function btnReset() {
  clearInterval(countInt);
}

//** TIME LEFT IN SESSION
function countDown(min, sec) {
  let result = '';

  countInt = setInterval(function() {
    if (min == 0 && sec == 0) {
      clearInterval(countInt);
      if (loop == 0) {
        timeLeft = breakNum;
        result = `${addLeadingZeroes(timeLeft)}:${addLeadingZeroes(sec)}`;
        timer.style.backgroundColor = '#272e38';
        timer.style.color = '#cacaca';
        wrapTimer.style.backgroundColor = '#0f1620';
        loop += 1;
        console.log(loop);
        countDown(timeLeft, 0);
      } else {
        timeLeft = sessionNum;
        loop -= 1;
      }
      alert('🚨 It is Cool 😎. I wish you could share ');

      // alarm play
    } else if (sec != 0) {
      sec -= 1;
    } else if (sec == 0) {
      sec = 59;
      min -= 1;
    }
    result = `${addLeadingZeroes(min)}:${addLeadingZeroes(sec)}`;
    timer.innerText = result;
  }, 1000);
}

//--------------------
// GET START IT !!!
//--------------------
function startTimer() {
  countDown(sessionNum, secondZero);
}

// METHODS:
//** BOARD:
function incrementBreak() {
  breakNum++;
  breakLength.textContent = breakNum;
  resetTimer();
}
function incrementSession() {
  sessionNum += 5;
  sessionLength.textContent = sessionNum;
  result = `${addLeadingZeroes(sessionNum)}:${addLeadingZeroes(secondZero)}`;
  timer.innerText = result;
}

function decrementBreak() {
  if (breakNum === 0) return 0;
  breakNum--;
  breakLength.textContent = breakNum;
}

function decrementSession() {
  if (!sessionNum) return 0;
  sessionNum -= 5;
  sessionLength.textContent = sessionNum;
  result = `${addLeadingZeroes(sessionNum)}:${addLeadingZeroes(secondZero)}`;
  timer.innerText = result;
}

// ADD DYNAMIC BREAK & SESSION
breakInc.addEventListener('click', incrementBreak);
breakDec.addEventListener('click', decrementBreak);
sessionInc.addEventListener('click', incrementSession);
sessionDec.addEventListener('click', decrementSession);

// DYNAMIC BOARD CONTROL
start.addEventListener('click', startTimer);
reset.addEventListener('click', resetTimer);
change.addEventListener('click', function() {
  wrapTimer.classList.toggle('dark');
});
