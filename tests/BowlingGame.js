function Player() {
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

function Game() {
  this.players = [];
  let count = 0;


  this.addPlayer = (playerName = new Player()) => {
    this.players.push(playerName);
  }

  this.numberOfPlayers = () => {
    return this.players.length;
  }

  this.getPlayers = () => {
    return this.players;
  }

  this.getSpareScore = (player) => {
    let spareScore = 0;

    spareScore += player.frame[count] + player.frame[count + 1] + player.frame[count + 2];
    return spareScore;
  }

  this.isSpare = (player) => {
    return player.frame[count] + player.frame[count + 1] == 10;
  }

  this.getStrikeScore = (player) => {
    let spareScore = 0;

    spareScore += player.frame[count] + player.frame[count + 1] + player.frame[count + 2];
    return spareScore;
  }

  this.isStrike = (player) => {
    return player.frame[count] == 10;
  }
}