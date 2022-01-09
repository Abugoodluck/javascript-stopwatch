var displaySec = document.querySelector('#seconds');
var displayMins = document.querySelector('#minutes');
var displayHrs = document.querySelector('#hour');
var sec = 00;
var mins = 00;
var hour = 00;
var interval;

function startTime () {
    clearInterval(interval);
    interval = setInterval( startTimer, 1000);
    let start = document.querySelector('#start').innerHTML = 'START';
};
function stopTime () {
   clearInterval(interval);
   let start = document.querySelector('#start').innerHTML = 'PLAY';
};

function resetTime () {
    let start = document.querySelector('#start').innerHTML = 'START';
    clearInterval(interval);
    sec = '00';
    mins = '00';
    hour = '00';
    displaySec.innerText = sec;
    displayMins.innerText = mins;
    displayHrs.innerText = hour;
};
function startTimer () {
    sec++;
    if (sec <= 9) {
        displaySec.innerText = "0" + sec;  
    }
    if (sec > 9) {
        displaySec.innerText = sec;
    };
    if (sec >= 60 ) {
        mins++;
        displayMins.innerText = "0" + mins;
        sec = 0;
        displaySec.innerText = "0" + sec;
    }
    if (mins > 9) {
       displayMins.innerText = mins;
    }
    if (mins >=  60) {
        hour++;
        displayHrs.innerText = "0" + hour;
        mins = 0;
        displayMins.innerHTML = "0" + mins;
    }
};
