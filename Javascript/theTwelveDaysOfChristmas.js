const theTwelveDaysOfChristmas = () => {
    const song = {
        gifts: ['Partridge in a Pear Tree', 'Two Turtle Doves', 'Three French Hens', 'Four Calling Birds', 'Five Golden Rings', 'Six Geese a Laying', 'Seven Swans a Swimming', 'Eight Maids a Milking', 'Nine Ladies Dancing', 'Ten Lords a Leaping', 'Eleven Pipers Piping', 'Twelve Drummers Drumming'],
        days: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth','eleventh','twelfth']
    };

    let count = 0;

    const playTheSong = function() {
    let lyrics = [];
    lyrics.push('On the ' + song.days[count] + ' of Christmas, my true love gave to me:');
    for (let i = count; i >= 0; i--) {
        if(count === 0) {
            lyrics.push('A ' + song.gifts[i] + '.');
        } else if (i === 0) {
            lyrics.push('And a ' + song.gifts[i] + '.');
        } else if (i === 4) {
            lyrics.push(song.gifts[i] + '!');
        } else if (i > 0) {
            lyrics.push(song.gifts[i] + ',');
        }
    }
    lyrics.map(verse => {
        console.log(verse);
    });
    console.log(' ');
    count += 1;
    if(count < 12){
        playTheSong();
    }
    };
    playTheSong();
    return 'Whew, I am tired!';
};

theTwelveDaysOfChristmas();

//See the code in action here: https://repl.it/@SterlingChin/FemaleOtherPayware