// Your task is to implement a program that reads a string in Reverse Polish notation (https://en.wikipedia.org/wiki/Reverse_Polish_notation)  and prints the result of the calculation.
// Your program should support positive and negative integers and the operators +, -, *.

const reversePolishNotation = (n) => {
  let array = n.split(' ');
  let answer = 0;
  const operators = ['+', '-', '*', '/'];
  const loop = x => {
    for(let i = 0; i < x.length; i++) {
      const job = {
        '+': parseInt(x[i-2]) + parseInt(x[i-1]),
        '-': parseInt(x[i-2]) - parseInt(x[i-1]),
        '*': parseInt(x[i-2]) * parseInt(x[i-1]),
        '/': parseInt(x[i-2]) / parseInt(x[i-1])
      };
      if(operators.indexOf(array[i]) >= 0){
        x.splice(i-2, 3, job[array[i]]);
        if(array.length > 2){
          loop(x);
        }
        answer = x[0];
      }
    }
  };
  if(array.length > 2){
    loop(array);
  }
  return answer;
};

console.log(reversePolishNotation('15 7 1 1 + - / 3 * 2 1 1 + + -'), 'expect 5');
console.log(reversePolishNotation('9 3 4 + -'), 'expect 2');

//See the code in action here: https://repl.it/@SterlingChin/reversePolishNotation