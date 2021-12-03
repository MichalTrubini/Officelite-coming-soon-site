//GET FUTURE DATE
const days = 30;
let secondsPerDay = 24 * 60 * 60 * 1000;
let nextDate = new Date( Date.now() + days * secondsPerDay);

let	day = nextDate.getUTCDate(),
	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[nextDate.getMonth()],
	curYear = nextDate.getFullYear(),
    futureDate = day + " " + curMonth + " " + curYear;

document.querySelector('.countdown__date--accent').innerText = futureDate;

//COUNTDOWN

let secondsTotal = days * secondsPerDay;

let numberOfDays = secondsTotal / secondsPerDay;

console.log(numberOfDays);