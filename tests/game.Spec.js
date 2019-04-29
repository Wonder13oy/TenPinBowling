describe('Player', () => {
  it('Should create a player', () => {
    let player = new Player();
    expect(player).toBeDefined();
  })

  it('Should display player with 0 frames', () => {
    let player = new Player();
    
    expect(player.frames.length).toBe(0);
  })

  it('Should return player score', () =>{
    let game = new Game();
    let playerOne = new Player();
    (game.addPlayer(playerOne));

    playerOne.roll(5);

    expect(playerOne.score()).toEqual(5);
  })

  it('Should return Error when more than 10 pins are hit', () =>{
    let game = new Game();
    let playerOne = new Player();
    (game.addPlayer(playerOne));

    playerOne.roll(5);
    playerOne.roll(6);

    expect(playerOne.score()).toEqual('Error');
  })

  it('Should show that a new player has 20 rolls left', () => {
    let playerOne = new Player();

    expect(playerOne.availableRolls).toBe(20);
  })

  it('Should display the amount of rolls left after playing', () => {
    let playerOne = new Player();

    playerOne.roll(5);
    playerOne.roll(6);

    expect(playerOne.availableRolls).toBe(18);

    let playerTwo = new Player();

    playerTwo.roll(3);
    playerTwo.roll(3);
    playerTwo.roll(3);

    expect(playerTwo.availableRolls).toBe(17);
  })

});

describe('Game', () => {
  it('Should create the game', () => {
    let game = new Game();
    expect(game).toBeDefined();
  })

  it('Should add players', () => {
    let game = new Game();
    let playerOne = new Player();

    (game.addPlayer(playerOne));
    expect(game.numberOfPlayers()).toEqual(1);

    let playerTwo = new Player();

    (game.addPlayer(playerTwo));
    expect(game.numberOfPlayers()).toEqual(2);
  })

  it('Should only allow to 2 rolls for each frame', () => {
    let game = new Game();
    let playerOne = new Player();
    (game.addPlayer(playerOne));

    playerOne.roll(3);
    playerOne.roll(3);
    playerOne.roll(3);

    expect(playerOne.frames.length).toBe(2);
  })

  it('Should be able to find a SPARE', () => {
    let game = new Game();
    let playerOne = new Player();
    (game.addPlayer(playerOne));

    playerOne.roll(5);
    playerOne.roll(5);
    playerOne.roll(3);

    expect(game.isSpare(playerOne)).toBe(true);
  })

  it('Should be able to return a SPARE', () => {
    let game = new Game();
    let playerOne = new Player();
    (game.addPlayer(playerOne));

    playerOne.roll(5);
    playerOne.roll(5);
    playerOne.roll(3);

    expect(game.getSpareScore(playerOne)).toBe(13);
  })

  it('Should be able to find a STRIKE', () => {
    let game = new Game();
    let playerOne = new Player();
    let playerTwo = new Player();
    (game.addPlayer(playerOne));
    (game.addPlayer(playerTwo));

    playerOne.roll(10);
    playerOne.roll(5);
    playerOne.roll(3);

    expect(game.isStrike(playerOne)).toBe(true);

    playerTwo.roll(5);
    playerTwo.roll(5);
    playerTwo.roll(3);

    expect(game.isStrike(playerTwo)).toBe(false);
  })

  it('Should be able to return a STRIKE', () => {
    let game = new Game();
    let playerOne = new Player();
    (game.addPlayer(playerOne));

    playerOne.roll(10);
    playerOne.roll(4);
    playerOne.roll(3);

    expect(game.getStrikeScore(playerOne)).toBe(17);

    playerOne.roll(10);
    playerOne.roll(3);
    playerOne.roll(3);

    expect(game.getStrikeScore(playerOne)).toBe(16);
  })
});