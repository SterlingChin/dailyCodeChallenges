// Print out the number of times December 25th falls on a Saturday for this century.

const dates = (year) => {
  for (let i = 0; i < 100; i++) {
    const date = (year + i) + '-12-25';
    if(new Date(date.toString()).getDay() === 5) {
      console.log(year + i);
    }
  }
};

console.log(dates(1900));
dates(2000);

// See the code in action here: https://repl.it/@SterlingChin/FirebrickFlamboyantLamp