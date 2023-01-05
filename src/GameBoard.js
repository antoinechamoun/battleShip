const selectPosition = require("./selectPosition");
const Ship = require("./Ship");

function GameBoard() {
  this.ships = [
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
    new Ship(2),
    new Ship(2),
    new Ship(1),
    new Ship(1),
    new Ship(1),
    new Ship(1),
  ];
  this.isDestroyed = false;
  this.missedShots = [];
}

GameBoard.prototype.placeShips = function () {
  this.ships.forEach((ship) => {
    let selectedOption = selectPosition(ship.length, gameBoard);
    ship.addPosition(selectedOption);
    ship.position.map((positionsOfThisShip) => {
      this.ships.map((everyShip) => {
        everyShip.position.map((everyShipPosition) => {
          if (everyShipPosition === positionsOfThisShip) {
            found = true;
          }
        });
      });
    });
  });
};
module.exports = GameBoard;
