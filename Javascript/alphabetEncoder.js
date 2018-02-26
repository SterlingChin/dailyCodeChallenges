// Given a string, replace every letter with its position in the alphabet; 'a' being 1, 'b' being 2, etc.

// E.g. 'The sunset sets at twelve o' clock.' -->
// '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
const a = 'abcdefghijklmnopqrstuvwxyz';

const encoder = str => {
  let encodedMessage = [];
  str.replace(/[^a-zA-Z]/g, "").split('').map(x => {
    encodedMessage.push(a.indexOf(x.toLowerCase())+1);
  });
  return encodedMessage;
};

encoder("The sunset sets at twelve o' clock.");

//See the code in action here: https://repl.it/@SterlingChin/AchingBouncyBloatware