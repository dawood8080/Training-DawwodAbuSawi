/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of num.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
const rockPaperScissors = function(num) {
  const plays = ['rock', 'paper', 'scissors'];

  // store all plays arr of arrs
  const outcomes = [];

  // recursive function
  const getOutcomes = (roundsLeft, playsSoFar) => {
    // base case
    if (roundsLeft === 0) {
      outcomes.push(playsSoFar);
    } else {
      // for over each play
      for (let i = 0; i < plays.length; i++) {
        getOutcomes(roundsLeft - 1, playsSoFar.concat(plays[i]));
      }
    }
  };

  getOutcomes(num, []);
  return outcomes;
};

describe('rockPaperScissors', () => {
  it('returns sequence of throws a single player in the given rounds', () => {
    expect(rockPaperScissors(3)).toStrictEqual([
      [ 'rock', 'rock', 'rock' ],
      [ 'rock', 'rock', 'paper' ],
      [ 'rock', 'rock', 'scissors' ],
      [ 'rock', 'paper', 'rock' ],
      [ 'rock', 'paper', 'paper' ],
      [ 'rock', 'paper', 'scissors' ],
      [ 'rock', 'scissors', 'rock' ],
      [ 'rock', 'scissors', 'paper' ],
      [ 'rock', 'scissors', 'scissors' ],
      [ 'paper', 'rock', 'rock' ],
      [ 'paper', 'rock', 'paper' ],
      [ 'paper', 'rock', 'scissors' ],
      [ 'paper', 'paper', 'rock' ],
      [ 'paper', 'paper', 'paper' ],
      [ 'paper', 'paper', 'scissors' ],
      [ 'paper', 'scissors', 'rock' ],
      [ 'paper', 'scissors', 'paper' ],
      [ 'paper', 'scissors', 'scissors' ],
      [ 'scissors', 'rock', 'rock' ],
      [ 'scissors', 'rock', 'paper' ],
      [ 'scissors', 'rock', 'scissors' ],
      [ 'scissors', 'paper', 'rock' ],
      [ 'scissors', 'paper', 'paper' ],
      [ 'scissors', 'paper', 'scissors' ],
      [ 'scissors', 'scissors', 'rock' ],
      [ 'scissors', 'scissors', 'paper' ],
      [ 'scissors', 'scissors', 'scissors' ]
    ])
  })
})
