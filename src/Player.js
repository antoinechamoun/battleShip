function Player(value, gameBoard) {
  this.type = value;
  this.gameBoard = gameBoard;
  this.attackedPosition = [];
}

Player.prototype.Attack = function (value) {
  if (this.type !== "computer") {
    this.attackedPosition.push(value);
  } else {
    let horOpt = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let horChoice = Math.floor(Math.random() * 10);
    let vertChoice = Math.ceil(Math.random() * 10);
    value = horOpt[horChoice] + vertChoice;
  }
  return value;
};

module.exports = Player;
