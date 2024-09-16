let countdown; // Global variable for interval
let time_seconds = 5; // Time to count down
let isPaused = false; // Flag to track if the timer is paused

function startTimer() {
    // If the timer is paused, resume it
    if (isPaused) {
        isPaused = false;
        document.getElementById('play_pause').src = 'running_timer.png'; // Update icon to running
        countdown = setInterval(updateTimer, 1000); // Resume the timer
    } else {
        // Otherwise, start a new timer
        time_seconds = 5; // Reset time for demo purposes
        document.getElementById('timerMessage').innerText = "Timer started for " + time_seconds + " seconds";
        document.getElementById('play_pause').src = 'running_timer.png'; // shows timer running logo
        countdown = setInterval(updateTimer, 1000); // Start the countdown
    }
}

function updateTimer() {
    time_seconds--; // decreases by 1 second
    document.getElementById('timerMessage').innerText = "Countdown: " + time_seconds + " seconds";

    if (time_seconds <= 0) {
        clearInterval(countdown); // Stop the interval
        alert("Timer done");
        document.getElementById('play_pause').src = 'green_play.png'; // shows stop timer logo
        document.getElementById('timerMessage').innerText = "Timer stopped";
    }
}

function pauseTimer() {
    if (!isPaused) {
        clearInterval(countdown); // Stop the interval
        document.getElementById('timerMessage').innerText = "Paused at " + time_seconds + " seconds";
        document.getElementById('play_pause').src = 'stop.png'; // Update icon to paused
        isPaused = true; // Set paused state
    } else {
        startTimer(); // Resume the timer
    }
}

// Event listeners for buttons
document.getElementById('start_timer').addEventListener('click', startTimer);
document.getElementById('pause_timer').addEventListener('click', pauseTimer);

