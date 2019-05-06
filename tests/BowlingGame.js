function Player() {//A player CLass
  this.frames = [];
  this.availableRolls = 20;
  this.frame = [];
  let count = 0;

  this.roll = (pinsHit) => {
    this.frame.push(pinsHit);
    
    if(this.frame.length <= 2)
    {
      this.frames.push(this.frame);
      count++;
    }
    
    this.availableRolls--;
  }

  this.score = () => {
    let sum = 0;
    
    this.frames.forEach(rolls => {
      
      rolls.forEach(roll => {
        if (sum + roll <= 10) {
          sum += roll;
        } else {
          sum = 'Error';
          return;
        }
      });
      
    });

    return sum;
  }

}

function Game() {//A game class
  this.players = [];//For multiple players that may want to play

  this.addPlayer = (playerName = new Player()) => {
    this.players.push(playerName);
  }

  this.numberOfPlayers = () => {//Returns the number of players that are playing
    return this.players.length;
  }

  this.getPlayers = () => {//Returns the players that are playing the game
    return this.players;
  }

  this.getSpareScore = (player, count = 0) => {
    let spareScore = 0;

    spareScore += player.frame[count] + player.frame[count + 1] + player.frame[count + 2];
    return spareScore;
  }

  this.isSpare = (player, count = 0) => {
    return player.frame[count] + player.frame[count + 1] == 10;
  }

  this.getStrikeScore = (player, count = 0) => {
    let spareScore = 0;

    spareScore += player.frame[count] + player.frame[count + 1] + player.frame[count + 2];
    return spareScore;
  }

  this.isStrike = (player, count = 0) => {
    return player.frame[count] == 10;
  }
}
