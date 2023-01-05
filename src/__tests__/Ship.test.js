const Ship = require("../Ship");

test("Add position to a ship", () => {
  let ship = new Ship(3);
  expect(ship.addPosition(["A1", "B1", "C1"])).toEqual(["A1", "B1", "C1"]);
});

test("Add position to a ship", () => {
  let ship = new Ship(3);
  expect(ship.addPosition(["A1", "B1"])).toBe(
    "Please choose compatible position"
  );
});

test("Check if the ship is hit", () => {
  let ship = new Ship(3);
  expect(ship.isHit()).toBe(1);
});

test("Check if the ship is hit twice", () => {
  let ship = new Ship(3);
  ship.isHit();
  expect(ship.isHit()).toBe(2);
});

test("Check if the ship is sunk", () => {
  let ship = new Ship(1);
  ship.addPosition(["A1"]);
  ship.isHit();
  expect(ship.checkIfSunk()).toBe(true);
});

test("Check if the ship is not sunk", () => {
  let ship = new Ship(2);
  ship.addPosition(["A1",'B1']);
  ship.isHit();
  expect(ship.checkIfSunk()).toBe(false);
});