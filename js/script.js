//GET CURRENT DATE

let objToday = new Date(),
	day = objToday.getDay(),
	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
    today = day + " " + curMonth + " " + curYear;

document.querySelector('.countdown__date--accent').innerText = today;
