// Calculate the day of the week on any date in history.

// It should take in a day, month, and year as input, and return the day of the week for that date.

const dayInHistory = (d, m, y) => {
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    m = month.indexOf(m) > -1 ? month.indexOf(m) + 1 : m;
    const date = new Date(y + '-' + m + '-' + d).getDay();
    return day[date];
};

console.log(dayInHistory(4, 7, 1054)); //Expect Tuesday
console.log(dayInHistory(18, 'June', 1815)); //Expect Sunday
console.log(dayInHistory(7, 'September', 1982)); //Expect Tuesday
dayInHistory(3, 4, 1989); //Expect Monday

// See the code in action here: https://repl.it/@SterlingChin/dayInHistory