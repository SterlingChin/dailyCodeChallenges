// An Anagram is a word, phrase, or name formed by rearranging the letters of another word, phrase or name.
// For example: `Elvis = lives`, or `Funeral = Real fun`.
// Your goal today is to take two phrases as strings and return `true` if the phrases are anagrams of each other.

const anagramCheck = (phrase1, phrase2) => {
    return phrase1.toLowerCase().replace(/[^a-z]/g, "").split('').sort().join('') === phrase2.toLowerCase().replace(/[^a-z]/g, "").split('').sort().join('');
  };
// anagramCheck("Eleven plus two", "Twelve plus one"); // true
// anagramCheck("Madam Curie", "Radium came"); // true
// anagramCheck("Your face", "four Chase"); // false
anagramCheck("Mother-in-law",  "Woman Hitler"); // true
// anagramCheck("Father-in-law", "Near halfwit"); // true
// anagramCheck("Heavy Rain?", "Hire a Navy!"); // true

// See the code in action here: https://repl.it/@SterlingChin/LikelyHilariousTransversal