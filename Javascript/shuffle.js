// Suppose you have a deck of cards represented as a linked list.
// You can perfectly shuffle that list by cutting it at the halfway point, then interleaving the two halves by alternating back and forth between the cards.
// For example, suppose you want to perfectly shuffle this sequence:
// 1 2 3 4 5 6 7 8 9 10

// You'd start by splitting it into two halves, like this:
// 1 2 3 4 5
// 6 7 8 9 10

// Then, you'd interleave the halves, like this:
// 6 1 7 2 8 3 9 4 10 5

// The resulting list is said to have been perfectly shuffled.
// Your job is to write a function that accepts as input a pointer to a list with an even number of elements,
// then rearranges the elements in that list so that they're perfectly shuffled.

let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

const doTheSterlingShuffle = arr => {
  let newArr= [];
  let left = arr.slice(0, Math.floor(arr.length/2));
  let right = arr.splice(Math.floor(arr.length/2), Math.ceil(arr.length/2));
  for(let i = 0; i < right.length; i++) {
    newArr.push(right[i]);
    newArr.push(left[i])
  }
  if(!newArr[newArr.length-1]){ newArr.pop() }
  return newArr
}

doTheSterlingShuffle(test)

// See the code in action here: https://repl.it/@SterlingChin/StraightWobblyHoneybadger