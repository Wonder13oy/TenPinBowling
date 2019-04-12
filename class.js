export class bowlingGame {
  let playerOne;
  let playerTwo;
  let scorePlayerOne;
  let scorePlayerTwo;

  constructor(playerOneName, playerTwoName) {
    playerOne = playerOneName;
    playerTwo = playerTwoName;
    scorePlayerOne= [];
    scorePlayerTwo = [];

    let roll1 = 0, let roll2 = 0;
    let frameOne = [roll1, roll2];

    let game = [frameOne, frameTwo, ...]
  }

  function get PlayerNames() {
    return `Player 1: ${playerOne} and Player 2: ${playerTwo}`;
  }

  function set Score(firstRoll, secondRoll) {

      if(firstRoll <= 10 && secondRoll <= 10)
      {

        return firstRoll + secondRoll;

      } else if (secondRoll == undefined) {

        return firstRoll;

      }
      return console.error("Invalid input");
  }

  function checkForStrike(pinsKnockedDown, numberOfTurns) {

      if(pinsKnockedDown === 10 && numberOfTurns === 1)
      {
        return "STRIKE";
      }
      return "";
  }

  function checkForSpare(pinsKnockedDown, numberOfTurns) {

      if(pinsKnockedDown === 10 && numberOfTurns === 2)
      {
        return "SPARE";
      }
      return "";
  }

  function bonusPoints(strikeOrSpare, playerObject) {

      for (var i = 0, var j = 0; i < array.length; i++) {
        playerObjec
      }
  }

  function getLeaderBoard(playerOneScore, playerTwoScore) {

      if (playerOneScore > playerTwoScore) {
        return `1. playerOne: ${playerOneScore} | 2. playerTwo: ${playerTwoScore}`
      } else if (playerTwoScore > playerOneScore) {
        return `1. playerTwo: ${playerTwoScore} | 2. playerOne: ${playerOneScore}`
      }
      return `d. playerOne: ${playerOneScore} | d. playerTwo: ${playerTwoScore}`

  }
}
