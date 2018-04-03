// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

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

const primeSum = n => {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        if(isPrime(i)) {
        sum += i;
        }
    }
    return sum;
};

primeSum(2000000);

//See the code in action here: https://repl.it/@SterlingChin/UnconsciousAncientTrialsoftware