// FIZZBUZZ time! Write a program that outputs '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, and so forth until 100.' 

const fizzBuzz = () => {
    const Fizz = 'Fizz';
    const Buzz = 'Buzz';
    for (let i = 1; i <= 100; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(Fizz + Buzz);
        } else if (i % 3 === 0) {
            console.log(Fizz);
        } else if (i % 5 === 0) {
            console.log(Buzz);
        } else {
            console.log(i);
        }
    }
};

fizzBuzz();

// See the code in action here: https://repl.it/@SterlingChin/BewitchedUnrulyServers