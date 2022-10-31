/*
Write a function pingPongTracker that accepts no arguments and returns an object with the
following methods:
- timeSpentPlaying() should return the total amount of time you have played pingpong.
- playOneGame() should increase the total time you played pingpong by 15 minutes
  and return a string "Game played"
- myLevel() should return your experience level based on how much time you have spent playing
  pingpong. These are the levels: a) Less than 30 minutes - "I need to improve my game"
                                  b) 30-100 minutes - "You need to improve your game"
                                  c) More than 100 minutes - "Wow, I have wasted a lot of time"
Example:
var myGame = pingPongTracker();
myGame.playOneGame();//should return "Game played";
myGame.playOneGame();//should return "Game played";
myGame.timeSpentPlaying(); //should return 30;
myGame.myLevel(); //should return "You need to improve your game"
*/

const messages = ['I need to improve my game', 'You need to improve your game', 'Wow, I have wasted a lot of time'];

function pingPongTracker() {
    let timeSpent = 0;

    const timeSpentPlaying = () => {
      return timeSpent;
    }

    const playOneGame = () => {
      timeSpent += 15;
      return 'Game Played';
    }

    const myLevel = () => {
      return timeSpent < 30 ? messages[0]
      : timeSpent > 100 ? messages[2] : messages[1];
    }

    return {
      timeSpentPlaying,
      playOneGame,
      myLevel,
    }
}

describe('pingPongTracker', () => {
  it('returns functions', () => {
    const myGame = pingPongTracker();

    expect(myGame).toMatchObject({
      timeSpentPlaying: expect.any(Function),
      playOneGame: expect.any(Function),
      myLevel: expect.any(Function),
    })
  });

  it(`returns \'${messages[0]}\' when calling myLevel`, () => {
    const myGame = pingPongTracker();

    expect(myGame.timeSpentPlaying()).toBe(0);
    expect(myGame.playOneGame()).toBe('Game Played');
    expect(myGame.timeSpentPlaying()).toBe(15);
    expect(myGame.myLevel()).toBe(messages[0])
  });

  it(`returns \'${messages[1]}\' when calling myLevel`, () => {
    const myGame = pingPongTracker();

    expect(myGame.playOneGame()).toBe('Game Played');
    expect(myGame.playOneGame()).toBe('Game Played');
    expect(myGame.timeSpentPlaying()).toBe(30);
    expect(myGame.myLevel()).toBe(messages[1]);
  });

  it(`returns \'${messages[2]}\'`, () => {
    const myGame = pingPongTracker();

    for( let i = 0 ; i < 8 ; i++){
      expect(myGame.playOneGame()).toBe('Game Played');
    }
    expect(myGame.timeSpentPlaying()).toBe(120);
    expect(myGame.myLevel()).toBe(messages[2]);
  });
});
