const position = require("./position.js");
const letters = require("./letters.js");
class Ship {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
        this.positions = [];
    }

    addPosition(position) {
        this.positions.push(position);
    }

    addPositions(startingPosition, direction) {
        for(let i = 0; i < this.size; i++) {
            switch (direction) {
                case "E":
                    this.positions.push(new position(letters.get(startingPosition.column.value + i), startingPosition.row));
                    break;
                case "W":
                    this.positions.push(new position(letters.get(startingPosition.column.value - i), startingPosition.row));
                    break;
                case "S":
                    this.positions.push(new position(startingPosition.column, startingPosition.row + i));
                    break;
                case "N":
                    this.positions.push(new position(startingPosition.column, startingPosition.row - i));
                    break;
            }
        }
    }
}

module.exports = Ship;