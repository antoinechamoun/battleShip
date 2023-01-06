// const selectPosition = require('../selectPosition')
const Ship = require("../Ship");
const GameBoard = require("../GameBoard");

test("Each gameBoard has 10 ships", () => {
  let gameBoard = new GameBoard();
  expect(gameBoard.ships.length).toEqual(10);
});

test("All ships have positions filled", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  expect(gameBoard.allTakenPosition.length).toEqual(20);
});

test("All ships have unique positions", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  let unique = true;
  while (gameBoard.allTakenPosition.length !== 0) {
    let removedPosition = gameBoard.allTakenPosition.pop();
    if (gameBoard.allTakenPosition.indexOf(removedPosition) !== -1) {
      unique = false;
    }
  }
  expect(unique).toBe(true);
});

test("Ship is hit", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  let result = gameBoard.receiveShots("A1");
  let test = false;
  gameBoard.ships.map((ship) => {
    ship.position.map((positions) => {
      if (positions === "A1") {
        test = true;
      }
    });
  });
  if (result === true) {
    expect(test).toBe(true);
  }
  if (result === false) {
    expect(test).toBe(false);
  }
});

test("Ship is hit and all position length decreased", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  let result = gameBoard.receiveShots("A1");

  if (result === true) {
    expect(gameBoard.allTakenPosition.length).toBe(19);
  }
  if (result === false) {
    expect(gameBoard.allTakenPosition.length).toBe(20);
  }
});
