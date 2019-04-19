let game = new BowlingGame();
let count1 = 0;
let count2 = 0;
let rolls = 20;

{
	var p1frames = [
		(frame1 = [
			document.getElementsByClassName('p1Frames1')[0].innerHTML,
			document.getElementsByClassName('p1Frames2')[0].innerHTML,
		]),
		(frame2 = [
			document.getElementsByClassName('p1Frames1')[1].innerHTML,
			document.getElementsByClassName('p1Frames2')[1].innerHTML,
		]),
		(frame3 = [
			document.getElementsByClassName('p1Frames1')[2].innerHTML,
			document.getElementsByClassName('p1Frames2')[2].innerHTML,
		]),
		(frame4 = [
			document.getElementsByClassName('p1Frames1')[3].innerHTML,
			document.getElementsByClassName('p1Frames2')[3].innerHTML,
		]),
		(frame5 = [
			document.getElementsByClassName('p1Frames1')[4].innerHTML,
			document.getElementsByClassName('p1Frames2')[4].innerHTML,
		]),
		(frame6 = [
			document.getElementsByClassName('p1Frames1')[5].innerHTML,
			document.getElementsByClassName('p1Frames2')[5].innerHTML,
		]),
		(frame7 = [
			document.getElementsByClassName('p1Frames1')[6].innerHTML,
			document.getElementsByClassName('p1Frames2')[6].innerHTML,
		]),
		(frame8 = [
			document.getElementsByClassName('p1Frames1')[7].innerHTML,
			document.getElementsByClassName('p1Frames2')[7].innerHTML,
		]),
		(frame9 = [
			document.getElementsByClassName('p1Frames1')[8].innerHTML,
			document.getElementsByClassName('p1Frames2')[8].innerHTML,
		]),
		(frame10 = [
			document.getElementsByClassName('p1Frames1')[9].innerHTML,
			document.getElementsByClassName('p1Frames2')[9].innerHTML,
		]),
	];

	var p2frames = [
		(p2frame1 = []),
		(p2frame2 = []),
		(p2frame3 = []),
		(p2frame4 = []),
		(p2frame5 = []),
		(p2frame6 = []),
		(p2frame7 = []),
		(p2frame8 = []),
		(p2frame9 = []),
		(p2frame10 = []),
	];
}

function playerOneGame(pinsHit) {
	// playerOneTurn.roll(pinHit(pinsHit));
	// rollMany(0, --count, playerOneTurn);
	// p1frames[frameIndex].push(playerOneTurn.score());
	// document.getElementsByClassName('p1Frames1')[frameIndex].innerHTML =
	// 	p1frames[frameIndex];

	let pins = pinsHit;
	let tempNum = rolls;

	sum.push(pins);
	if (sum.length == 2) {
		if (sum[0] + sum[1] <= 10) {
			for (var x = 0; x < 20; x++) {
				for (var frameIndex = 0; frameIndex < 2; frameIndex++) {
					p1frames[x][frameIndex].innerHTML = sum[frameIndex];
				}
			}
			document.getElementById('marker' + count1).innerHTML = pinHit(
				sum[0],
				sum[1],
			);
		} else {
			document.getElementById('comments').innerHTML =
				'There are only ten pins!';
			sum = [];
			return;
		}
	} else {
		return;
	}
	document.getElementById('marker' + count1).innerHTML = pinHit(sum[0], sum[1]);
	document.getElementById('buttons2').style.display = 'inline-block';
	document.getElementById('buttons1').style.display = 'none';
	count1++;
	rolls = tempNum;
}

function playerTwoGame() {
	playerTwoTurn.roll(Math.floor(Math.random() * 11));
	rollMany(0, --rolls, playerTwoTurn);
	p2frames[frameIndex].push(playerTwoTurn.score());
	document.getElementsByClassName('p2Frames')[frameIndex].innerHTML =
		p2frames[frameIndex];

	playerTwoTurn.roll(Math.floor(Math.random() * 11));
	rollMany(0, --rolls, playerTwoTurn);
	p2frames[frameIndex].push(playerTwoTurn.score());
	document.getElementsByClassName('p2Frames')[frameIndex].innerHTML =
		p2frames[frameIndex];

	frameIndex++;
	document.getElementById('btn2').style.display = 'none';
	document.getElementById('btn1').style.display = 'inline-block';
}

let sum = [];

function pinHit(number1, number2) {
	game.roll(number1);
	game.roll(number2);
	rollMany(0, --rolls);

	return game.score();
}

function rollMany(pins, rolls) {
	for (var i = 0; i < rolls; i++) {
		game.roll(pins);
	}
}
