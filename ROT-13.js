// Write a function that uses the ROT-13 encryption algorithm.
// E.g. 'Why did the chicken cross the road?' --> 'Gb trg gb gur bgure fvqr!'

const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !?";
const output ="NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm !?";

const string1 = "Why did the chicken cross the road?";
const string2 = 'Gb trg gb gur bgure fvqr!';

function encrypt(str) {
  return str.split('').map(x => output[input.indexOf(x)]).join('');
}

console.log(encrypt(string1));
encrypt(string2);

// See the code in action here: https://repl.it/@SterlingChin/BigheartedEmbarrassedIde