const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const millisecondsElement = document.querySelector('#milliseconds');
const startBtn = document.querySelector('#start-btn');
const pauseBtn = document.querySelector('#pause-btn');
const resumeBtn = document.querySelector('#resume-btn');
const resetBtn = document.querySelector('#reset-btn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', startTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }

            minutesElement.textContent = formatTime(minutes);
            secondsElement.textContent = formatTime(seconds);
            millisecondsElement.textContent = milliseconds;
        }
    }, 10);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

