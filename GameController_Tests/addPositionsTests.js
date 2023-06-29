const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js")
const ship = require("../GameController/ship");

describe('addPositionsTests', function () {

  it('should return none empty array if the ship has positions', function () {
    var testship = new ship("Battleship", 3, 0);
    testship.addPositions(new position(letters.A, 1), "E");

    assert.deepStrictEqual(testship.positions,
        [
            new position(letters.A, 1),
            new position(letters.B, 1),
            new position(letters.C, 1)
        ]);
  });

    it('should return none empty array if the ship has positions', function () {
        var testship = new ship("Battleship", 3, 0);
        testship.addPositions(new position(letters.C, 1), "W");

        assert.deepStrictEqual(testship.positions,
            [
                new position(letters.C, 1),
                new position(letters.B, 1),
                new position(letters.A, 1)
            ]);
    });

    it('should return none empty array if the ship has positions', function () {
        var testship = new ship("Battleship", 3, 0);
        testship.addPositions(new position(letters.A, 1), "S");

        assert.deepStrictEqual(testship.positions,
            [
                new position(letters.A, 1),
                new position(letters.A, 2),
                new position(letters.A, 3)
            ]);
    });

    it('should return none empty array if the ship has positions', function () {
        var testship = new ship("Battleship", 3, 0);
        testship.addPositions(new position(letters.A, 1), "N");

        assert.deepStrictEqual(testship.positions,
            [
                new position(letters.A, 1),
                new position(letters.A, 0),
                new position(letters.A, -1)
            ]);
    });


});