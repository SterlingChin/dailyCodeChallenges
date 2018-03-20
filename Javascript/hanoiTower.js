// Tower of Hanoi is a famous problem. https://en.wikipedia.org/wiki/Tower_of_Hanoi
// The challenge today is a very famous one where you are to write a function to calculate the total number of moves to solve the tower in fastest way possible

const hanoiTower = (height) => {return Math.pow(2, height) - 1};

console.log(hanoiTower(15));
console.log(hanoiTower(10));
console.log(hanoiTower(7));
console.log(hanoiTower(5));
hanoiTower(3);

// See the code in action here: https://repl.it/@SterlingChin/MeekMicroDoom