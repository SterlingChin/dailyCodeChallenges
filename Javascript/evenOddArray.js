// Take an array of integers and partition it so that all the even integers in the array precede all the odd integers in the array.

// E.g. [7,2,1,4,6,1,8,4,2,5] --> [2,4,6,8,4,2,7,1,1,5]

const sortEvenOdd = (array, expected) => {
    let count = 0;
    for(let i = array.length-1; i >=0; i--) {
        if(array[i] % 2 !== 0) {
            let odd = array.splice(i, 1);
            array.splice(array.length - count, 0, odd[0]);
            count += 1;
        }
    }
    console.log('expected', expected)
    return array;
};

console.log(sortEvenOdd([1,3,5,7,9,2,4,6,8,0], [2,4,6,8,0,1,3,5,7,9])); 
console.log(sortEvenOdd([5,8,3,9,5,9,3,1,6,9,4], [8,6,4,5,3,9,5,9,3,1,9]));
sortEvenOdd([7,2,1,4,6,1,8,4,2,5], [2,4,6,8,4,2,7,1,1,5]);

//See the code in action here: https://repl.it/@SterlingChin/LowestShorttermElectricity