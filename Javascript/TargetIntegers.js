// Write a program that takes a list of integers and a target number and determines if any two integers in the list sum to the target number.n If so, return the two numbers. If not, return an indication that no such integers exist.

const letsTestThis = (list, target) => {
    const sortedList = list.sort();
    if(sortedList[sortedList.length -1] >= target/2) {
      for (let i = sortedList.length-1; i >= 0; i--) {
        for (let j = sortedList.length-2; j >= 0; j--) {
          if(sortedList[i] + sortedList[j] === target) {
            return 'The numbers ' + sortedList[i] + " + " + sortedList[j] + ' equal ' + target;
          }
        }
      }
    }
    return 'You shall not pass!!!';
  };

  letsTestThis([1,2,3,4,5,6,7], 8);

//You can see the code in action here: https://repl.it/@SterlingChin/StimulatingVividRouter