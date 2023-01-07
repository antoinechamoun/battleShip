import Player from "./Player";
import GameBoard from "./GameBoard";

const leftBoard = document.querySelector(".left");
const rightBoard = document.querySelector(".right");
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let turn = false;

// GamePlay
let playerBoard = new GameBoard();
let player1 = new Player("tony", playerBoard);

let computerBoard = new GameBoard();
let computer = new Player("computer", computerBoard);

computerBoard.placeShips();
playerBoard.placeShips();

let computerPositions = computerBoard.allTakenPosition;
let playerPosition = playerBoard.allTakenPosition;

// User interface
for (let i = 0; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const square = document.createElement("div");
    square.className = "left-grid";
    square.id = String(i) + "_" + String(j);
    if (playerPosition.indexOf(alphabet[String(i)] + String(j)) !== -1) {
      square.style.backgroundColor = "green";
      square.addEventListener("click", () => {
        if (turn === true) {
          square.style.backgroundColor = "red";
        }
      });
    } else {
      square.addEventListener("click", () => {
        if (turn === true) {
          square.style.backgroundColor = "black";
        }
      });
    }
    leftBoard.append(square);
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 1; j < 11; j++) {
    const square = document.createElement("div");
    square.className = "right-grid";
    square.id = String(i) + "_" + String(j);

    if (computerPositions.indexOf(alphabet[String(i)] + String(j)) !== -1) {
      square.addEventListener("click", () => {
        if (turn === false) {
          square.style.backgroundColor = "red";
          turn = false;
        } else {
          window.alert("Not your turn");
        }
      });
    } else {
      square.addEventListener("click", () => {
        square.style.backgroundColor = "black";
        // turn=true
      });
    }

    rightBoard.append(square);
  }
}

// Game turns
const leftBoardHandler = (e) => {
  if (turn === true) {
    let shot = e.target.id;
    shot = alphabet[shot.split("_")[0]] + shot.split("_")[1];
    playerBoard.receiveShots(shot);
    if (playerPosition.indexOf(shot) !== -1) {
      turn = false;
    } else {
      turn = true;
    }
  } else {
    window.alert("Not your Board, please select from the second board");
  }
  if (playerBoard.hasAllShipsBeenSunk()) {
    window.alert("Computer won!");
    location.reload();
  }
};

const rightBoardHandler = (e) => {
  if (turn === false) {
    let shot = e.target.id;
    shot = alphabet[shot.split("_")[0]] + shot.split("_")[1];
    if (computerBoard.missedShots.indexOf(shot) === -1) {
      let result = computerBoard.receiveShots(shot);
      if (result === false) {
        turn = false;
      } else {
        turn = true;
        while (turn) {
          let computerShot;
          do {
            computerShot = computer.Attack();
          } while (playerBoard.missedShots.indexOf(computerShot) !== -1);
          let computerResult = playerBoard.receiveShots(computerShot);
          computerShot = computerShot.split("");
          computerShot =
            alphabet.indexOf(computerShot[0]) + "_" + computerShot[1];
          let squareShot = document.getElementById(`${computerShot}`);
          squareShot.click();

          if (computerResult === true) {
            turn = false;
          }
        }
      }
    } else {
      window.alert("Square already hit! Choose another");
    }
  } else {
    window.alert("Not your turn");
  }
  if (computerBoard.hasAllShipsBeenSunk()) {
    window.alert("You won!");
    location.reload();
  }
};

rightBoard.addEventListener("click", rightBoardHandler);
leftBoard.addEventListener("click", leftBoardHandler);
