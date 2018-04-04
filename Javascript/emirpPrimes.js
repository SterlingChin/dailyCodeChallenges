// An emirp ('prime' spelled backwards) is a prime whose (base 10) reversal is also prime, 
// but which is not a palindromic prime. The first few are 13, 17, 31, 37, 71, 73...

// Implement a function which prints out the emirps below a number(input).

const isPrime = n => {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

const printEmirp = n => {
    let primes = [];
    for(let i = 13; i <= n; i++) {
        if(isPrime(i)) {
            let inverse = parseInt(i.toString().split('').reverse().join(''));
            if(isPrime(inverse)) {
                if(i !== inverse) {
                primes.push(i);
                }
            }
        }
    }
    return primes;
};

printEmirp(300);

// See the code in action here: https://repl.it/@SterlingChin/TrivialNumbBlockchain