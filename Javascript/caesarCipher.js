// Your task today is to implement the Caesar cipher.

// For every letter you want to encrypt, you shift it some number of places down the alphabet to get the letter in the cipher.
// With a shift of 3, 'A' --> 'D'

// 'Hello' with a shift of 3 --> 'Khoor'.


const caesarCipher = (string, num) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipher = alphabet.split('').splice(num, alphabet.split('').length - num).join('') + alphabet.split('').splice(0, num).join('') ;
    const sentence = string.split(' ').length > 1;

    if (sentence) {
        return string.split(' ').map(word => word.split('').map(letter => letter === letter.toUpperCase() ? cipher[alphabet.indexOf(letter.toLowerCase())].toUpperCase() : cipher[alphabet.indexOf(letter)]).join('')).join(' ');
    }
    return string.split('').map(letter => letter === letter.toUpperCase() ? cipher[alphabet.indexOf(letter.toLowerCase())].toUpperCase() : cipher[alphabet.indexOf(letter)]
    ).join('');
};

console.log(caesarCipher('Experience is the teacher of all things', 18)); // 'Wphwjawfuw ak lzw lwsuzwj gx sdd lzafyk'
console.log(caesarCipher('The quick brown fox jumps over the lazy dog', 14)); // 'Hvs eiwqy pfckb tcl xiadg cjsf hvs zonm rcu'
console.log(caesarCipher('Hello there', 5)); // 'Mjqqt ymjwj'
caesarCipher('Hello', 3); // 'Knoor'


//See the code in action here: https://repl.it/@SterlingChin/PhysicalImmaterialMoto