var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var timer;
var running = false;
var buttons = {
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
    reset: document.getElementById("reset")
}
var display = {
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
    milliseconds: document.getElementById("milliseconds")
}

function startBtn() {
    buttons.start.disabled = true
    if (!running) {
        buttons.start.style.opacity = '.6'
        timer = setInterval(updateTime, 10)
        running = false;
        buttons.start.addEventListener('mouseover', () => {
            buttons.start.style.cursor = 'not-allowed'
        })
    }
}
function updateTime() {
    milliseconds++
    if (milliseconds >= 100) {
        milliseconds = 0
        seconds++
        if (seconds >= 60) {
            seconds = 0;
            minutes++
        }
    }
    updateDisplay()
}
function updateDisplay() {
    if (milliseconds < 10) {
        display.milliseconds.textContent = `0${milliseconds}`
    } else {
        display.milliseconds.textContent = milliseconds
    }

    if (seconds > 9) {
        display.seconds.textContent = seconds
    } else {
        display.seconds.textContent = `0${seconds}`
    }
    if (minutes > 9) {
        display.minutes.textContent = minutes
    } else {
        display.minutes.textContent = `0${minutes}`
    }

}
function pauseBtn() {
    buttons.start.addEventListener('mouseover', () => {
        buttons.start.style.cursor = 'pointer'
    })
    buttons.start.disabled = false;
    buttons.start.style.opacity = '1';
    running = false;
    clearInterval(timer)
}
function resetBtn() {
    buttons.start.addEventListener('mouseover', () => {
        buttons.start.style.cursor = 'pointer'
    })
    buttons.start.disabled = false;
    buttons.start.style.opacity = '1';
    running = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    clearInterval(timer)
    updateDisplay()
}

// add Event Listeners
buttons.start.addEventListener('click', startBtn)
buttons.pause.addEventListener('click', pauseBtn)
buttons.reset.addEventListener('click', resetBtn)