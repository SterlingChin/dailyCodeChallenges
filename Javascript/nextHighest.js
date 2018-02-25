// Create a function that takes a positive integer number and returns the next bigger number formed by the same digits.

// E.g. 2017 --> 2071
// 513 --> 531

const nextHighest = num => {
    let newNum = num.toString().split('');
    let numToSplice = 0;
    num = num.toString().split('');
    for(let i = num.length-1; i> 0; i--) {
      if(num[i] > num[i-1]) {
        numToSplice = newNum.splice(i-1, 1);
        newNum.splice(i, 0, numToSplice[0]);
        return parseInt(newNum.join(''));
      }
    }
  }

  console.log(nextHighest(2017)); //expect 2071
  console.log(nextHighest(2010));
  console.log(nextHighest(2071));
  nextHighest(2170);

  // See the code in action here: https://repl.it/@SterlingChin/DimgreyUnknownFunctions