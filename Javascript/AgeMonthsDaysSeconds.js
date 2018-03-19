// Create a program that will take user input and tell them their age in months, days, hours, and minutes.

// E.g. 18 --> 216 months, 6480 days, 155520 hours, and 388800 minutes
// #365daysofcode

const age = (num) => {
  let months = num * 12;
  let days = num * 365.25;
  let hours = days * 24;
  let minutes = hours * 60;
  return months + ' months, ' + days + ' days, ' + hours + ' hours, ' + minutes + ' minutes'
};

age(35);

// See the code in action here: https://repl.it/@SterlingChin/MelodicDemandingBackslash