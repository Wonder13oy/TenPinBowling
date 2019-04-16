describe('Ten pin Bowling Game', () => {
  let game;

  function rollMany (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }

  beforeEach(() => {
    game = new BowlingGame('Wandile');
  })


  it('Can roll a gutter', () => {

    rollMany(0, 20);

    expect(game.score()).toBe(0);
  });

  it('Can roll all ones', () => {
    rollMany(1, 20);

    expect(game.score()).toBe(20);
  });

  it('Can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);

    expect(game.score()).toBe(16);
  });

  it('Can roll a strike', () => {
    game.roll(10);
    game.roll(3);
    game.roll(6);
    rollMany(0, 16);

    expect(game.score()).toBe(28);
  })

  it('Can roll a perfect game', () => {
    rollMany(10, 20);

    expect(game.score()).toBe(300);
  })
});

describe('To test if the user inputs work', () => {
      var user;
      let game;

      beforeEach(() => {
        user = "Wandile";
        game = new BowlingGame();
      })

    it('Should return the names of the users', () => {

        game.setPlayerName(user);

        expect(game.getPlayerName()).toBe(`Wandile`);
    })

    it('Should not return empty values', () => {
      game.setPlayerName(user);

      expect(game.getPlayerName()).not.toBe(``);
    })
});
