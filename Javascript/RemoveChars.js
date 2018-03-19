// Write a function that takes two strings and removes from the first string any character that appears in the second string.

// E.g. ('Daily Programmer', 'aeiou ') --> 'DlyPrgrmmr'.

// note: the space in 'Daily Programmer' is removed

const removeLetters = (str1, str2) => {
  return str1.replace(new RegExp('['+str2+']', 'g'), '');
};

removeLetters('Daily Programmer', 'aeiou ');

//See the code in action here: https://repl.it/@SterlingChin/OnlyWorthyTrapezoids