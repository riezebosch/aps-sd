const assert = require('assert').strict;
const gameController = require("../GameController/gameController.js");
const letters = require("../GameController/letters.js");
const position = require("../GameController/position.js")
const Ship = require("../GameController/ship");
const colors = require("cli-color");

describe('battleshipTests', function () {

    it('should return true if all ships of the player have been sunk', function () {
        gameController.myFleet = [
            new Ship("Aircraft Carrier", 5, colors.CadetBlue),
            new Ship("Battleship", 4, colors.Red),
            new Ship("Submarine", 3, colors.Chartreuse),
            new Ship("Destroyer", 3, colors.Yellow),
            new Ship("Patrol Boat", 2, colors.Orange)
        ];

        gameController.myFleet.forEach((ship, index) => {
            const letter = letters.get(index + 1);
            for(let i = 1; i <= ship.size; i++) {
                ship.addPosition(new position(letter, i));
                ship.addHitPosition(new position(letter, i));
            }
        });

        assert.ok(gameController.gameEnded(gameController.myFleet) === true);
    });

    it('should return false if not all ships of the player have been sunk', function () {
        gameController.myFleet = [
            new Ship("Aircraft Carrier", 5, colors.CadetBlue),
            new Ship("Battleship", 4, colors.Red),
            new Ship("Submarine", 3, colors.Chartreuse),
            new Ship("Destroyer", 3, colors.Yellow),
            new Ship("Patrol Boat", 2, colors.Orange)
        ];

        gameController.myFleet.forEach((ship, index) => {
            const letter = letters.get(index + 1);
            for(let i = 1; i <= ship.size; i++) {
                ship.addPosition(new position(letter, i));
            }
        });

        assert.ok(gameController.gameEnded(gameController.myFleet) === false);
    });
});