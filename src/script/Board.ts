import {IPlayer} from "./IPlayer";
import {IShip} from "./IShip";
import {Cell} from "./Cell";

export class Board {
    cells: Cell[][];
    player: IPlayer;

    constructor(player: IPlayer, cells: Cell[][]) {
        this.player = player;
        this.cells = cells;
    }

    turnShipGenerator(ship: IShip) {
        let turn: number = Math.floor(Math.random() * 2);
        if (turn == 1)
            ship.turn = 'vertically';
    }

    positionGenerator() {
        let x: number = Math.floor(Math.random() * 10);
        let y: number = Math.floor(Math.random() * 10);

        let startingPoint: Array<number> = [x, y];

        return startingPoint;
    }

    drawHumanShips(ships: IShip[]) {
        ships.forEach(() => {
            for (let i: number = 0; i < 10; i++) {
                for (let j: number = 0; j < 10; j++) {
                        //TODO
                }
            }
        });
    }

    drawBotShips() {
        for (let i: number = 0; i < 10; i++) {
            for (let j: number = 0; j < 10; j++) {
                        //TODO
            }
        }
    }
}
