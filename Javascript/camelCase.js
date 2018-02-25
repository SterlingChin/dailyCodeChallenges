// Write a function that takes CamelCase string and returns the string in snake_case notation.

// E.g. 'MoviesAndBooks' --> 'movies_and_books'

const camelCase = str => {
    let newStr = str.split('');
    newStr.map((letter, i) => {
      if(newStr[i] === newStr[i].toUpperCase()) {
        newStr[i] = newStr[i].toLowerCase();
        if(i > 0) {
          newStr.splice(i, 0, '_');
        }
      }
    });
    return newStr.join('');
  };

  camelCase('MoviesAndBooks'); //'movies_and_books'
  camelCase('ThisIsATest'); //'this_is_a_test'
  camelCase('letsSeeIfThisWorks') //'lets_see_if_this_works'

//   See the code in action here: https://repl.it/@SterlingChin/OutstandingFortunateOutcomes