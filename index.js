let playerOneTurn = new BowlingGame();
let playerTwoTurn = new BowlingGame();
let count = 20;
let frameIndex = 0;

{
  var p1frames = [
    frame1 = [],
    frame2 = [],
    frame3 = [],
    frame4 = [],
    frame5 = [],
    frame6 = [],
    frame7 = [],
    frame8 = [],
    frame9 = [],
    frame10 = []
  ]

  var p2frames = [
  p2frame1 = [],
  p2frame2 = [],
  p2frame3 = [],
  p2frame4 = [],
  p2frame5 = [],
  p2frame6 = [],
  p2frame7 = [],
  p2frame8 = [],
  p2frame9 = [],
  p2frame10 = []
]
}

function playerOneGame() {

  let randomNum = Math.floor(Math.random() * 11);
  playerOneTurn.roll(randomNum);
  randomNum = Math.floor(Math.random() * 11);
  playerOneTurn.roll(randomNum);
  rollMany(0, count - 2, playerOneTurn);
  p1frames[frameIndex].push(playerOneTurn.score());
  document.getElementsByClassName('p1Frames1')[frameIndex].innerHTML = p1frames[frameIndex];

  // randomNum = Math.floor(Math.random() * 11);
  // playerOneTurn.roll(randomNum);
  // rollMany(0, --count, playerOneTurn);
  p1frames[frameIndex].push(playerOneTurn.score());
  document.getElementsByClassName('p1Frames2')[frameIndex].innerHTML = p1frames[frameIndex + 1];

  document.getElementById('btn2').style.display = "inline-block";
  document.getElementById('btn1').style.display = "none";
}

function playerTwoGame() {
  if(frameIndex == 0)
  {
    count = 20;
  }

  playerTwoTurn.roll(Math.floor(Math.random() * 11));
  rollMany(0, --count, playerTwoTurn);
  p2frames[frameIndex].push(playerTwoTurn.score());
  document.getElementsByClassName('p2Frames')[frameIndex].innerHTML = p2frames[frameIndex];

  playerTwoTurn.roll(Math.floor(Math.random() * 11));
  rollMany(0, --count, playerTwoTurn);
  p2frames[frameIndex].push(playerTwoTurn.score());
  document.getElementsByClassName('p2Frames')[frameIndex].innerHTML = p2frames[frameIndex];

  frameIndex++;
  document.getElementById('btn2').style.display = "none";
  document.getElementById('btn1').style.display = "inline-block";
}

function rollMany (pins, rolls, player) {
  for (var i = 0; i < rolls; i++) {
    if (player == playerOneTurn)
    {
      playerOneTurn.roll(pins);
    } else {
      playerTwoTurn.roll(pins);
    }
  }
}
