// Write a procedure called reverse(N, A), where N is an integer and A is an array which reverses the N first items in the array and leaves the rest intact.

// E.g. if N = 3 and A = [1,2,3,4,5], then reverse(N,A) --> [3,2,1,4,5].

const reverse = (N, A) => {
    let remainder = A.splice(N, (A.length - N));
    let reversed = A.splice(0, N).reverse();
    return [...reversed, ...remainder];
};
console.log(reverse(6, [1,2,3,4,5,6,7,8,9,0]));
console.log(reverse(5, [1,2,3,4,5,6,7,8,9,0]));
console.log(reverse(4, [1,2,3,4,5,6,7,8,9,0]));
console.log(reverse(3, [1,2,3,4,5,6,7,8,9,0]));
console.log(reverse(2, [1,2,3,4,5,6,7,8,9,0]));
console.log(reverse(1, [1,2,3,4,5,6,7,8,9,0]));
console.log(reverse(0, [1,2,3,4,5,6,7,8,9,0]));
reverse(3, [1,2,3,4,5]);

//See the code in action here: https://repl.it/@SterlingChin/OpaqueTransparentShelfware