// Your challenge is to build an array with a full deck of 52 cards without hard coding the values.

// e.g. [ { value: 'A', suit: 'hearts' }, { value: 'A', suit: 'diamonds' },...]

const values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K',];
const suits = ['hearts','diamonds','clubs','spades',];

const deckBuilder = () => {
  let deck = [];
  values.map(x => {
    suits.map(y => {
      deck.push({value: x, suit: y});
    });
  });
  return deck;
};

deckBuilder();

// See the working code here: https://repl.it/@SterlingChin/OriginalBleakGnudebugger