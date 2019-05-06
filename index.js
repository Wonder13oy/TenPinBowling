let rollsArr = [];
let p1 = new BowlingGame();
let p2 = new BowlingGame();
let count1 = 0;
let count2 = 0;
let p1rolls = 2;
let p2rolls = 2;
let p1Score = 0;
let p2Score = 0;
//Since there is no score registered yet
let isStrike = false;
let isSpare = false;

//Asking for the user names
p1.setPlayerName(prompt('Enter Name Player One:'));
p2.setPlayerName(prompt('Enter Name Player Two:'));

//This is function is called when the start button is clicked
function playGame() {
	document.getElementById('playerOneName').innerText = p1.getPlayerName();
	document.getElementById('playerTwoName').innerText = p2.getPlayerName();

	document.getElementById('buttons2').style.display = 'none';
	document.getElementById('buttons1').style.display = 'inline-block';
	document.getElementById('startBut').style.display = 'none';
}

//Function takes the number input and calculates the score
function playerOneGame(pinsHit) {
	let pins = pinsHit;

	if (count1 < 10) {
		rollsArr.push(pins);
		document.getElementsByClassName('p1Frames1')[count1].innerHTML =
			rollsArr[0];
		
		if (rollsArr.length == 2) {
			if (isStrike) {//Allocates the next 2 frame scores to the previous frame score
				p1Score = p1Score + rollsArr[0] + rollsArr[1];
				document.getElementById('marker' + (count1 - 1)).innerHTML = p1Score;
			}
			if (isSpare) {//Allocates the next frame score to the previous frame score
				p1Score = p1Score + rollsArr[0];
				document.getElementById('marker' + (count1 - 1)).innerHTML = p1Score;
			}
			
			//Checks the case whereby there is an openframe
			if (rollsArr[0] + rollsArr[1] < 10) {
				document.getElementsByClassName('p1Frames2')[count1].innerHTML =
					rollsArr[1];
				p1Score += rollsArr[0] + rollsArr[1];
				document.getElementById('marker' + count1).innerHTML = p1Score;
				document.getElementById('comments').innerHTML = '';
				document.getElementById('buttons2').style.display = 'inline-block';
				document.getElementById('buttons1').style.display = 'none';
				count1++;
				rollsArr = [];
			} else if (rollsArr[0] + rollsArr[1] == 10) {//When a spare is hit
				document.getElementsByClassName('p1Frames2')[count1].innerHTML = '/';
				p1Score += rollsArr[0] + rollsArr[1];
				document.getElementById('marker' + count1).innerHTML = p1Score;
				document.getElementById('comments').innerHTML = 'Spare!';
				document.getElementById('buttons2').style.display = 'inline-block';
				document.getElementById('buttons1').style.display = 'none';
				isSpare = true;
				count1++;
				rollsArr = [];
			} else {//Triggered when the player gives an invalid frame
				document.getElementById('comments').innerHTML =
					'There are only ten pins!';
				rollsArr.pop();
				return;
			}
		}
		if (rollsArr[0] == 10) {//When a strike is achieved
			document.getElementsByClassName('p1Frames1')[count1].innerHTML = pins;
			document.getElementsByClassName('p1Frames2')[count1].innerHTML = 'X';
			p1Score += 10;
			document.getElementById('comments').innerHTML = 'Strike!';
			document.getElementById('marker' + count1).innerHTML = p1Score;
			document.getElementById('buttons2').style.display = 'inline-block';
			document.getElementById('buttons1').style.display = 'none';
			rollsArr = [];
			isStrike = true;
			count1++;
		} else if (isStrike == false) {
			return;
		}
	}
}

//The exact repeat of playerOneGame(pinsHit) but only for the second player
function playerTwoGame(pinsHit) {
	let pins = pinsHit;

	if (count2 < 10) {
		rollsArr.push(pins);
		document.getElementsByClassName('p2Frames1')[count2].innerHTML =
			rollsArr[0];

		if (rollsArr.length == 2) {
			if (isStrike) {
				p2Score = p2Score + rollsArr[0] + rollsArr[1];
				document.getElementById('p2marker' + (count2 - 1)).innerHTML = p2Score;
			}
			if (isSpare) {
				p2Score = p2Score + rollsArr[0];
				document.getElementById('p2marker' + (count2 - 1)).innerHTML = p2Score;
			}

			if (rollsArr[0] + rollsArr[1] < 10) {
				document.getElementsByClassName('p2Frames2')[count2].innerHTML =
					rollsArr[1];
				p2Score += rollsArr[0] + rollsArr[1];
				document.getElementById('p2marker' + count2).innerHTML = p2Score;
				document.getElementById('comments').innerHTML = '';
				document.getElementById('buttons2').style.display = 'none';
				document.getElementById('buttons1').style.display = 'inline-block';
				count2++;
				rollsArr = [];
			} else if (rollsArr[0] + rollsArr[1] == 10) {
				document.getElementsByClassName('p2Frames2')[count2].innerHTML = '/';
				p2Score += rollsArr[0] + rollsArr[1];
				document.getElementById('p2marker' + count2).innerHTML = p2Score;
				document.getElementById('comments').innerHTML = 'Spare!';
				document.getElementById('buttons2').style.display = 'none';
				document.getElementById('buttons1').style.display = 'inline-block';
				isSpare = true;
				count2++;
				rollsArr = [];
			} else {
				document.getElementById('comments').innerHTML =
					'There are only ten pins!';
				rollsArr.pop();
				return;
			}
		}
		if (rollsArr[0] == 10) {
			document.getElementsByClassName('p2Frames1')[count2].innerHTML = pins;
			document.getElementsByClassName('p2Frames2')[count2].innerHTML = 'X';
			p2Score += 10;
			document.getElementById('comments').innerHTML = 'Strike!';
			document.getElementById('p2marker' + count2).innerHTML = p2Score;
			document.getElementById('buttons2').style.display = 'none';
			document.getElementById('buttons1').style.display = 'inline-block';
			rollsArr = [];
			isStrike = true;
			count2++;
		} else if (isStrike == false) {
			return;
		}
	} else {
		document.getElementById('buttons2').style.display = 'none';
		document.getElementById('buttons1').style.display = 'none';
		document.getElementById('comments').innerHTML = 'Game Over!';
		return;
	}
}
