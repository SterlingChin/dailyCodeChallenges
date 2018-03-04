// Write a program that can print the song '99 Bottles of Beer'.

const beer = () => {
    for(var i = 99; i > 0 ; i--) {
        if(i > 1) {
            console.log(i + ' bottles of beer on the wall,');
            console.log(i + ' bottles of beer.');
            console.log('Take one down, pass it around,');
            if(i !== 2) {
              console.log((i-1) + ' bottles of beer on the wall.');
              console.log(' ');
            } else {
              console.log((i-1) + ' bottle of beer on the wall.');
              console.log(' ');
            }
        }
        if(i === 1) {
            console.log(i + ' bottle of beer on the wall,');
            console.log(i + ' bottle of beer.');
            console.log('Take one down, pass it around,');
            console.log('No more bottles of beer on the wall!');
        }
    }
    return 'Now, sit down, call and Uber, and get home safe!';
};

beer();

// See the code in action here: https://repl.it/@SterlingChin/SecretUtilizedBookmarks