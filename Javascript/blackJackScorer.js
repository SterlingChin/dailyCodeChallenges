// Write a function called scoreHand that determines the score of a hand in the card game Blackjack (aka 21).

// This function takes one parameter which is an array of strings that represent each card in the hand.
// Each card will be one of the following strings: "2",..,"10", "J", "Q", "K", "A"

// It returns a number which is the score of the hand.
// Return the highest score of the cards that is less than or equal to 21.
// If there is no score less than or euqal to 21 return the smallest score more than 21.

// Scoring rules: In Blackjack number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.
function scoreHand(cards) {
    let score = 0;
    let score2 = 0
    cards.map(x => {
        if(x === "J" || x === "Q" || x === "K") {
            score += 10
            score2 += 10
        } else if (x === "A") {
            score >= 11 ? score += 1 : score += 11;
            score2 += 1
        } else {
            score += parseInt(x)
            score2 += parseInt(x)
        }
    })
    if (score > 21 && score2 <= 21) {
        return score2
    }
    return score
}

console.log(scoreHand([ '3' ])); //3
console.log(scoreHand([ 'A' ])); //11
console.log(scoreHand([ 'A', 'A' ])); //12
console.log(scoreHand([ 'A', 'A', 'A', 'A' ])); //14
console.log(scoreHand([ 'A', 'J' ])); //21
console.log(scoreHand([ 'A', 'J', 'A' ])); //12
console.log(scoreHand([ 'A', 'J', '7' ])); //18
console.log(scoreHand([ '8', '7', 'A' ])); //16
console.log(scoreHand([ '6', '5', 'A', '3', '2', 'A' ])); //18
console.log(scoreHand([ 'K', '4', '3', '2', 'A' ])); //20
console.log(scoreHand([ 'A', '10', '2' ])); //13
console.log(scoreHand([ 'K', '4', '3', '2', 'A', 'Q' ])); //30
console.log(scoreHand([ '5', '4', '3', '2', 'A', 'K' ])); //25

// See the code in action here: https://repl.it/@SterlingChin/QuintessentialMemorableWorker
