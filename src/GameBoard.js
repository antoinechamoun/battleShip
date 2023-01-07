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
  this.allTakenPosition = [];
}

GameBoard.prototype.placeShips = function () {
  this.ships.forEach((ship) => {
    let selectedOption = selectPosition(ship.length, this);
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
  this.ships.map((ship) => {
    ship.position.map((eachPosition) => {
      this.allTakenPosition.push(eachPosition);
    });
  });
};

GameBoard.prototype.receiveShots = function (position) {
  let checkIfMissedShot = true;
  this.allTakenPosition.map((eachPosition, id) => {
    if (eachPosition === position) {
      checkIfMissedShot = false;
      this.allTakenPosition.splice(id, 1);
    }
  });

  if (checkIfMissedShot === true) {
    this.missedShots.push(position);
  } else {
    this.ships.map((ship) => {
      if (ship.position.indexOf(position) !== -1) {
        ship.isHit();
      }
    });
  }
  return checkIfMissedShot
};

GameBoard.prototype.hasAllShipsBeenSunk = function () {
  if (this.allTakenPosition.length === 0) {
    return true;
  }
  return false;
};

module.exports = GameBoard;
