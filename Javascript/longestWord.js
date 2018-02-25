// Make a function that returns the longest word in a sentence.
// E.g. 'This is my sentence' --> sentence

const longestWord = str => {
    let theWord = '';
    str.split(' ').map(x => {
      if(x.length >= theWord.length) {
        theWord = x;
      }
    });
    return theWord;
  };

longestWord('This is my sentence');

// See the code in action here: https://repl.it/@SterlingChin/StiffFussyPatches