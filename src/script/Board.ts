import {IPlayer} from "./IPlayer";
import {IShip} from "./IShip";
import {Cell} from "./Cell";

export class Board {
    cells: Cell[][] = [];
    player: IPlayer;

    constructor(player: IPlayer) {
        this.player = player;
    }

    turnShipGenerator(ship: IShip) {
        let turn: number = Math.floor(Math.random() * 2);
        if (turn == 1)
            ship.turn = 'vertical';
    }

    positionGenerator() {
        let x: number = Math.floor(Math.random() * 10);
        let y: number = Math.floor(Math.random() * 10);

        let startingPoint: Array<number> = [x, y];

        return startingPoint;
    }

    fillVerticalCells(startingPoint: Array<number>, size: number) {
        for (let i: number = startingPoint[0]; i < (startingPoint[0] + size); i++) {
            if (this.cells[i][startingPoint[1]].isFilled()) {
                startingPoint = this.positionGenerator();
                this.fillVerticalCells(startingPoint, size);
            }
            this.cells[i][startingPoint[1]].fill = true;
            if (this.player.name == 'Human')
                this.cells[i][startingPoint[1]].element.className = 'player_cell_ship'
        }
    }

    fillHorizontalCells(startingPoint: Array<number>, size: number) {
        for (let i: number = startingPoint[1]; i < (startingPoint[1] + size); i++) {
            if (this.cells[startingPoint[0]][i].isFilled()) {
                startingPoint = this.positionGenerator();
                this.fillVerticalCells(startingPoint, size);
            }
            this.cells[startingPoint[0]][i].fill = true;
            if (this.player.name == 'Human')
                this.cells[startingPoint[0]][i].element.className = 'player_cell_ship'
        }
    }

    insertShips(ships: IShip[]) {
        ships.forEach((e) => {
            this.turnShipGenerator(e);
            let startingPoint: Array<number> = this.positionGenerator();

            if (e.turn == 'vertical') {
                while (startingPoint[0] + e.size >= 10) {
                    startingPoint = this.positionGenerator();
                }

                this.fillVerticalCells(startingPoint, e.size);
            } else {
                while (startingPoint[1] + e.size >= 10) {
                    startingPoint = this.positionGenerator();
                }

                this.fillHorizontalCells(startingPoint, e.size);
            }
        });
    }
}
