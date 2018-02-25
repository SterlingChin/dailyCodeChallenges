// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Source: https://projecteuler.net/problem=1

function numberSum(num) {
    var sum = 0;
    for(var i = 0; i <= num; i+=3) {
      sum +=i
    }
    for(var j =0; i <=num; i+=5) {
     if(i % 3 === 0){
       sum
      }
      sum += j
    }
    return sum
  }

numberSum(1000)

// See the code in action here: https://repl.it/@SterlingChin/HorribleRecklessQuinquespinosus