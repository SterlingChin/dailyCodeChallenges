// Your challenge today is to write a program that can find the amount of anagrams within a sentence. 'snap' would be an anagram of 'pans'

// E.g. Bristly birds steal the least stale tales of Tesla that are written on a slate stela (stone slab). --> ???

const anagramCount = str => {
    let sorted = [];
    let count = 0;
    str.toLowerCase().split(' ').map(x => {
        sorted.push(x.replace(/[^a-z]/g, '').split('').sort().join(''));
    });
    sorted.sort();
    for(let i = 0; i < sorted.length; i++) {
        if(sorted[i] === sorted[i+1]){
        count++
        }
    }
    return 'Total anagrams in this sentence is ' + count;
};

anagramCount('Bristly birds steal the least stale tales of Tesla that are written on a slate stela (stone slab).');

// See the code in action here: https://repl.it/@SterlingChin/LawngreenWhoppingTelevision