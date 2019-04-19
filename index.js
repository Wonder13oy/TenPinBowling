let game = new BowlingGame();
let count1 = 0;
let count2 = 0;
let rolls = 20;
let sum = 0;

{
	var p1frames = [
		(frame1 = [
			document.getElementsByClassName('p1Frames1')[0],
			document.getElementsByClassName('p1Frames2')[0],
		]),
		(frame2 = [
			document.getElementsByClassName('p1Frames1')[1],
			document.getElementsByClassName('p1Frames2')[1],
		]),
		(frame3 = [
			document.getElementsByClassName('p1Frames1')[2],
			document.getElementsByClassName('p1Frames2')[2],
		]),
		(frame4 = [
			document.getElementsByClassName('p1Frames1')[3],
			document.getElementsByClassName('p1Frames2')[3],
		]),
		(frame5 = [
			document.getElementsByClassName('p1Frames1')[4],
			document.getElementsByClassName('p1Frames2')[4],
		]),
		(frame6 = [
			document.getElementsByClassName('p1Frames1')[5],
			document.getElementsByClassName('p1Frames2')[5],
		]),
		(frame7 = [
			document.getElementsByClassName('p1Frames1')[6],
			document.getElementsByClassName('p1Frames2')[6],
		]),
		(frame8 = [
			document.getElementsByClassName('p1Frames1')[7],
			document.getElementsByClassName('p1Frames2')[7],
		]),
		(frame9 = [
			document.getElementsByClassName('p1Frames1')[8],
			document.getElementsByClassName('p1Frames2')[8],
		]),
		(frame10 = [
			document.getElementsByClassName('p1Frames1')[9],
			document.getElementsByClassName('p1Frames2')[9],
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

	rollsArr.push(pins);
	if (rollsArr.length == 2) {
		if (rollsArr[0] + rollsArr[1] <= 10) {
			for (var x = 0; x < 20; x++) {
				for (var frameIndex = 0; frameIndex < 2; frameIndex++) {
					p1frames[frameIndex].innerHTML = rollsArr[frameIndex];
				}
			}
			sum += pinHit(rollsArr[0], rollsArr[1]);
			document.getElementById('marker' + count1).innerHTML = sum;
		} else {
			document.getElementById('comments').innerHTML =
				'There are only ten pins!';
			rollsArr = [];
			return;
		}
	} else {
		return;
	}
	document.getElementById('marker' + count1).innerHTML = pinHit(
		rollsArr[0],
		rollsArr[1],
	);
	document.getElementById('buttons2').style.display = 'inline-block';
	document.getElementById('buttons1').style.display = 'none';
	count1++;
	rolls = tempNum;
}

function playerTwoGame() {
	let pins = pinsHit;
	let tempNum = rolls;

	rollsArr.push(pins);
	if (rollsArr.length == 2) {
		if (rollsArr[0] + rollsArr[1] <= 10) {
			for (var x = 0; x < 20; x++) {
				for (var frameIndex = 0; frameIndex < 2; frameIndex++) {
					p1frames[frameIndex].innerHTML = rollsArr[frameIndex];
				}
			}
			sum += pinHit(rollsArr[0], rollsArr[1]);
			document.getElementById('marker' + count1).innerHTML = sum;
		} else {
			document.getElementById('comments').innerHTML =
				'There are only ten pins!';
			rollsArr = [];
			return;
		}
	} else {
		return;
	}
	document.getElementById('marker' + count1).innerHTML = pinHit(
		rollsArr[0],
		rollsArr[1],
	);
	document.getElementById('buttons2').style.display = 'none';
	document.getElementById('buttons1').style.display = 'inline-block';
	count1++;
}

let rollsArr = [];

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
