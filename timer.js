function startTimer(){

    let time_seconds = 5;
    let time_minutes = 5;
    
    document.getElementById('timerMessage').innerText = "Timer started for " + time_seconds + " seconds";
    document.getElementById('play_pause').src='running_timer.png'; // shows timer running logo
    
    
    
    let countdown = setInterval(function(){
        time_seconds--; // decreases by 1 second
    
    
    document.getElementById('timerMessage').innerText = "Countdown: " + time_seconds + " seconds";
    
    if (time_seconds <= 0){
        clearInterval(countdown);  // Stop the interval
        alert("timer done"); // sends popup
        document.getElementById('play_pause').src='green_play.png'; // shows stop timer logo
        document.getElementById('timerMessage').innerText = "Timer stopped";
            }
        }, 1000);  // 1000 milliseconds = 1 second
    }
    
    /*
    setTimeout(function() {
        alert("timer done"); // sends popup
        document.getElementById('play_pause').src='green_play.png'; // shows stop timer logo
        document.getElementById('timerMessage').innerText = "Timer stopped";
    }, time_seconds * 1000);  // Time in milliseconds 
    
    /*
    timer_minutes(function() {
        console.log(time_minutes + "minute test timer");
    }, time_seconds * 60000);  // Time in milliseconds 
    */
    
    
    document.getElementById('start_timer').addEventListener('click', startTimer);
