const cross = "X";
const zero = "O";

let field  = [[10, 10, 10], [10, 10, 10], [10, 10, 10]]; // 1 = игрок1, 0 = игрок2
let player = true; //true -первый игрок
let win = false;

function toup(i, j) {
	if(field[i][j] == 10) {
		state(i,j);
	}
}

function state(i, j) {
	if(win == false) {
		if(player == true) {
			field[i][j] = 1;
			let cell = document.getElementById("cell"+ String(i) + String(j));
			cell.innerHTML = cross;
			checkWin();
			swapPlayer();
		} else {
			field[i][j] = 0;
			let cell = document.getElementById("cell"+ String(i) + String(j));
			cell.innerHTML = zero;
			checkWin();
			swapPlayer();
		}
	} 
}

function swapPlayer() {
	if(player == true) {
		player = false;
	} else {
		player = true;
	}
}

function checkWin() {
	for( let i = 0; i < 3; i++) { 
		let sum = 0;
		for( let j =0; j < 3; j++) {
			sum += field[i][j];
		}
		if((sum == 3) || (sum == 0)) {
			win = true;
		}
	}
	for( let j = 0; j < 3; j++) { 
		let sum = 0;
		for( let i =0; i < 3; i++) {
			sum += field[i][j];
		}
		if((sum == 3) || (sum == 0)) {
			win = true;
		}
	}
	
	let sum = 0;
	for( let i = 0; i < 3; i++) {
		sum += field[i][i];
	}
	if((sum == 3) || (sum == 0)) {
		win = true;
	}
	
	sum = 0;
	for( let i = 0; i < 3; i++) {
		sum += field[i][2 - i];
	}
	if((sum == 3) || (sum == 0)) {
		win = true;
	}
	
	if(win == true) {
		if(player == true) {
			document.getElementById("result").innerHTML = "Победил игрок 1!";
		} else {
			document.getElementById("result").innerHTML = "Победил игрок 2!";
		}
	}
}

function newGame() {
	for(let i = 0; i < 3; i++) {
		for(let j =0; j < 3; j++) {
			field[i][j] = 10;
			let cell = document.getElementById("cell"+ String(i) + String(j));
			cell.innerHTML = "";
		}
	}
	document.getElementById("result").innerHTML = "";
	player = true;
	win = false;
}

