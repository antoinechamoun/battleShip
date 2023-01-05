function Ship(value) {
  this.length = value;
  this.position = [];
  this.hits = 0;
  this.isSunk = false;
}

Ship.prototype.addPosition = function (array) {
  if (array.length !== this.length) {
    return "Please choose compatible position";
  }
  this.position = [...array];
  return array;
};

Ship.prototype.isHit = function () {
    this.hits++
  return this.hits
};

Ship.prototype.checkIfSunk = function (){
    if(this.length === this.hits){
        this.isSunk = true
        return true
    }
    return false
}

module.exports = Ship;
