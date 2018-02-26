// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces){
    var bracArr = braces.split("");
    var closeBracArr = [")", "}", "]"];
    var bracArrKey = { "(": ")", "{": "}", "[": "]" };
    while (bracArr.length > 0) {
        if (closeBracArr.indexOf(bracArr[0]) != -1) {
            return false;
        }
        var temp = bracArr[0];
        var match = false;
        for (var i = 1; i < bracArr.length; i++) {
            if (closeBracArr.indexOf(bracArr[i]) != -1 && bracArr[i] != bracArrKey[temp]) {
                return false;
            }
            if (closeBracArr.indexOf(bracArr[i]) != -1 && bracArr[i] == bracArrKey[temp]) {
                match = true;
                bracArr.splice(i, 1);
                i = bracArr.length;
            }
                else temp = bracArr[i];
        }
        if (!match) return false;
        bracArr.splice(bracArr.indexOf(temp), 1);
    }
    return true;
}

console.log(validBraces("(){}[]")); //True
console.log(validBraces("([{}])")); //True
console.log(validBraces("(}")); //False
console.log(validBraces("[(])")); //False
console.log(validBraces("[({})](]")); //False

