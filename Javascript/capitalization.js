// Write a function that capitalizes the first letter of every word in the string and accepts a second argument a list of exceptions.
// The first word of every title should ALWAYS have a capital leter.
// E.g. ('pizza is good', ['is']) --> 'Pizza is Good'

const capitalization = (n, x) => {
    return n.split(' ').map(word => {
        if(x.indexOf(word) < 0){
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }
        return word;
    }).join(' ');
};

const str1 = 'something like this is going to work if i write javascript correctly';

console.log(capitalization(str1, ['like', 'going','write', 'correctly']));
capitalization('pizza is good', ['is']);

//See the code in action here: https://repl.it/@SterlingChin/capitalization