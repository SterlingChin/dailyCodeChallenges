// Given an array of numbers, determine whether the sum of all of the numbers is odd or even.
// Give your answer in string format as 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    let sum = 0;
    array.map(e => sum+=e);
    return (sum % 2 === 0) ? 'even' : 'odd';
}

console.log(oddOrEven([0])); // 'even'
console.log(oddOrEven([2, 5, 34, 6])); // 'odd'
console.log(oddOrEven([0, -1, -5])); // "even"
oddOrEven([1,2,3,4,5,6,7,8,9,10,11,12]); //'even'

// See the code in action here: https://repl.it/@SterlingChin/RewardingNippyGigahertz