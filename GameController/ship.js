class Ship {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
        this.positions = [];
        this.hitPositions = [];
    }

    addPosition(position) {
        this.positions.push(position);
    }

    addHitPosition(position) {
        this.hitPositions.push(position);
    }

    isSunk() {
        return this.positions.filter((position) => {
            return this.hitPositions.some((hitPosition) => {
                return hitPosition.row === position.row && hitPosition.column.value === position.column.value;
            });
        }).length === this.size;
    }
}

module.exports = Ship;