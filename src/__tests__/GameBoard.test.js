// const selectPosition = require('../selectPosition')
const Ship = require("../Ship");
const GameBoard = require("../GameBoard");

test("Each gameBoard has 10 ships", () => {
  let gameBoard = new GameBoard();
  expect(gameBoard.ships.length).toEqual(10);
});

test("First ship length equal 4", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  expect(gameBoard.ships[0].length).toEqual(4);
});

test("Second ship length equal 3", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  expect(gameBoard.ships[1].length).toEqual(3);
});

test("Last ship length equal 1", () => {
  let gameBoard = new GameBoard();
  gameBoard.placeShips();
  expect(gameBoard.ships[9].length).toEqual(1);
});
