//GET FUTURE DATE
const days = 30;
let miliSecondsPerDay = 24 * 60 * 60 * 1000;
let nextDate = new Date( Date.now() + days * miliSecondsPerDay);
let secondsTotal = (days * miliSecondsPerDay) / 1000;

let	day = nextDate.getUTCDate(),
	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[nextDate.getMonth()],
	curYear = nextDate.getFullYear(),
    futureDate = day + " " + curMonth + " " + curYear;

document.querySelector('.countdown__date--accent').innerText = futureDate;

//COUNTDOWN

setInterval(countdown,1000);

function countdown() {

let secondsPerDay = 86400;
let secondsPerhour = 3600;
let secondsPerMinute = 60;

let numberOfDays = Math.floor(secondsTotal / secondsPerDay);
let numberOfHours = Math.floor((secondsTotal % secondsPerDay) / secondsPerhour );
let numberOfMinutes = Math.floor(((secondsTotal % secondsPerDay) % secondsPerhour ) / secondsPerMinute);
let numberOfSeconds = ((secondsTotal % secondsPerDay) % secondsPerhour ) % secondsPerMinute;

document.getElementById('remainder-days').innerText = numberOfDays;
document.getElementById('remainder-hours').innerText = numberOfHours;
document.getElementById('remainder-minutes').innerText = numberOfMinutes;
document.getElementById('remainder-seconds').innerText = numberOfSeconds;

console.log(numberOfDays,numberOfHours, numberOfMinutes,numberOfSeconds);
secondsTotal--;
}