// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//Leave punctuation marks untouched.

const pigLatinEncoder = str => {
  let newStr = [];
  str.split(' ').map(x => {
    let newWord = [];
    newWord.push(x.slice(1, x.length));
    newWord.push(x.split('').shift());
    newWord.push('ay');
    newStr.push(newWord.join(''));
  });
  return newStr.join(' ');
};

console.log(pigLatinEncoder('Pig latin is cool'));
//'Pig latin is cool' --> 'igPay atinlay siay oolcay'

const pigLatinDecoder = str => {
  let newStr = [];
  str.split(' ').map(x => {
    let newWord = [];
    newWord.push(x.split('').slice((x.length-3), x.length-2).join(''));
    newWord.push(x.slice(0,x.length-3));
    newStr.push(newWord.join(''));
  });
  return newStr.join(' ');
};

pigLatinDecoder(pigLatinEncoder('Pig latin is cool'));

// See the code in action here: https://repl.it/@SterlingChin/GrimUntimelyBacktick