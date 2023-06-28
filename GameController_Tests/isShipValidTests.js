const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js")
const ship = require("../GameController/ship");

describe('isShipValidTests', function () {

  it('should return true if the ship is valid', function () {
    var testship = new ship("Battleship", 3, 0);
    testship.addPosition(new position(letters.A, 1));
    testship.addPosition(new position(letters.A, 2));
    testship.addPosition(new position(letters.A, 3));

    var actual = gameController.isShipValid(testship);
    assert.ok(actual);
  });

  it('should return false if the ship is invalid', function () {
    var testship = new ship("Battleship", 3, 0);

    var actual = gameController.isShipValid(testship);
    assert.ok(!actual);
  });

  it('registers a hit on the ship', function() {
    var testship = new ship(
        'testShip',
        3,
        0,
    );
    const hitPosition = new position(letters.get(1), 1);
    testship.addHitPosition(hitPosition)
    assert.deepStrictEqual(testship.hitPositions, [hitPosition]);
  });

  it('should return true if the ship has the same positions as hitpositions', function() {
    var testship = new ship(
        'testShip',
        3,
        0,
    );
    testship.addPosition(new position(letters.get(1), 1));
    testship.addPosition(new position(letters.get(2), 1));
    testship.addPosition(new position(letters.get(3), 1));

    testship.addHitPosition(new position(letters.get(1), 1));
    testship.addHitPosition(new position(letters.get(2), 1));
    testship.addHitPosition(new position(letters.get(3), 1));

    assert.ok(testship.isSunk() === true);
  });

  it('should return false if the ship has not been hit in all positions', function() {
    var testship = new ship(
        'testShip',
        3,
        0,
    );
    testship.addPosition(new position(letters.get(1), 1));
    testship.addPosition(new position(letters.get(2), 1));
    testship.addPosition(new position(letters.get(3), 1));

    testship.addHitPosition(new position(letters.get(1), 1));

    assert.ok(testship.isSunk() === false);
  });
});