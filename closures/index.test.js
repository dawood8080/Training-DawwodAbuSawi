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

function pingPongTracker() {
    let timeSpent = 0;

    const timeSpentPlaying = function () {
      return timeSpent;
    }

    const playOneGame = () => {
      timeSpent += 15;
      return 'Game Played';
    }

    const myLevel = () => {
      return timeSpent < 30 ? 'I need to improve my game'
      : timeSpent > 100 ? 'Wow, I have wasted a lot of time' : 'You need to improve your game';
    }

    return {
      timeSpentPlaying,
      playOneGame,
      myLevel,
    }
}

describe('pingPongTracker', () => {
  it('should return functions', () => {
    const myGame = pingPongTracker();

    expect(myGame).toMatchObject({
      timeSpentPlaying: expect.any(Function),
      playOneGame: expect.any(Function),
      myLevel: expect.any(Function),
    })
  });

  it('should return \'I need to improve my game\' when calling myLevel', () => {
    const myGame = pingPongTracker();

    expect(myGame.timeSpentPlaying()).toBe(0);
    expect(myGame.playOneGame()).toBe('Game Played');
    expect(myGame.timeSpentPlaying()).toBe(15);
    expect(myGame.myLevel()).toBe('I need to improve my game')
  });

  it('should return \'You need to improve your game\' when calling myLevel', () => {
    const myGame = pingPongTracker();

    expect(myGame.playOneGame()).toBe('Game Played');
    expect(myGame.playOneGame()).toBe('Game Played');
    expect(myGame.timeSpentPlaying()).toBe(30);
    expect(myGame.myLevel()).toBe('You need to improve your game');
  });

  it('should return \'Wow, I have wasted a lot of time\'', () => {
    const myGame = pingPongTracker();

    for( let i = 0 ; i < 8 ; i++){
      expect(myGame.playOneGame()).toBe('Game Played');
    }
    expect(myGame.timeSpentPlaying()).toBe(120);
    expect(myGame.myLevel()).toBe('Wow, I have wasted a lot of time');
  });
});
