// Write a function that given two sorted lists, returns a list whith the two lists merged together into one sorted list.

// E.g. [1,5,7,8] and [2,3,4,7,9] ---> [1,2,3,4,5,7,7,8,9].

const sorted = (a,b) => {
    return [...a, ...b].sort();
};

console.log(sorted([1,3,5,7,9],[2,4,6,8,0]));
console.log(sorted([0,9,8,7,6],[5,4,3,2,1]));
console.log(sorted([1,5,3,7],[2,7,5,9,2]));
console.log(sorted([8,4,7,3,8],[6,4,2,1,8,0,6,5]));
sorted([1,5,7,8],[2,3,4,7,9]);

//See the code in action here: https://repl.it/@SterlingChin/ColdTemptingSet