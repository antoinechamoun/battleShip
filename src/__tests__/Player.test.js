const Player = require("../Player");
const GameBoard = require("../GameBoard");

test("Player attacks", () => {
  let gameBoard = new GameBoard();
  let player = new Player("player1", gameBoard);
  expect(player.Attack("A1")).toBe("A1");
});

test("Computer attacks", () => {
  let gameBoard = new GameBoard();
  let player = new Player("computer", gameBoard);
  expect(typeof player.Attack()).toBe("string");
});

test("Records attack", () => {
  let gameBoard = new GameBoard();
  let player = new Player("player1", gameBoard);
  player.Attack("A1");
  player.Attack("A2");
  expect(player.attackedPosition).toEqual(["A1", "A2"]);
});
