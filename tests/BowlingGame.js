class BowlingGame {

  constructor() {
    this.rolls = [];
    this.playerName = "";
  }

  roll(pinsKnocked) {
    this.rolls.push(pinsKnocked);
  }

  score() {
    let result = 0;
    let rollIndex = 0;
    let game = this;

      for (var frameIndex = 0; frameIndex < 10; frameIndex++) {

          if (isStrike()){
            result += getStrikeScore();
            rollIndex++;
          } else if (isSpare()) {
            result += getSpareScore();
            rollIndex += 2;
          } else {
            result += getOpenFrameScore();
            rollIndex += 2;
          }
      }

    return result;

    function isSpare() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] == 10;
    }

    function isStrike() {
      return game.rolls[rollIndex] == 10;
    }

    function getSpareScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }

    function getStrikeScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }

    function getOpenFrameScore() {
      return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
    }
  }

  setPlayerName(playerName) {
    this.playerName = playerName;
  }

  getPlayerName() {
    return this.playerName;
  }
}
