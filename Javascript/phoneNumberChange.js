// Write a program that will convert a phone number that contains letters into a phone number with only numbers and the appropriate dash.

// E.g. 1-800-COMCAST --> 1-800-266-2278
const letToNum = {
    a:2,
    b:2,
    c:2,
    d:3,
    e:3,
    f:3,
    g:4,
    h:4,
    i:4,
    j:5,
    k:5,
    l:5,
    m:6,
    n:6,
    o:6,
    p:7,
    q:7,
    r:7,
    s:7,
    t:8,
    u:8,
    v:8,
    w:9,
    x:9,
    y:9,
    z:9,
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  }

const phoneNumber = (str) => {
let newStr = str.split('-').map(x => (x.split('').map(y => (y.replace(y, letToNum[y.toLowerCase()]))).join(''))).join('-');
let newNum = newStr.split('');
newNum.splice(9, 0, '-');
return newNum.join('');
};

phoneNumber('1-800-COMCAST');

//See the code in action here: https://repl.it/@SterlingChin/ConsiderableDependableScreenscraper