import {IPlayer} from "./IPlayer";
import {IShip} from "./IShip";
import {Cell} from "./Cell";

export class Board {
    cells: Cell[][] = [];
    player: IPlayer;

    constructor(player: IPlayer, cells: Cell[][]) {
        this.player = player;
        this.cells = cells;
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

    fillVerticalCells(x: number, y: number, size: number){
        for(let i = x; i < (x + size); i++){
            console.log(i);
            this.cells[i][y].fill = true;
        }
    }

    fillHorizontalCells(x: number, y: number, size: number){
        for(let i = x; i < (y + size); i++){
            this.cells[x][i].fill = true;
        }
    }

    insertShips(ships: IShip[]) {
        ships.forEach((e) => {
            this.turnShipGenerator(e);
            let startingPoint: Array<number> = this.positionGenerator();

            if(e.turn == 'vertical'){
                while(startingPoint[0] + e.size >= 10){
                    startingPoint = this.positionGenerator();
                }

                this.fillVerticalCells(startingPoint[0], startingPoint[1], e.size);
            }
            else{
                while(startingPoint[1] + e.size >= 10){
                    startingPoint = this.positionGenerator();
                }

                this.fillHorizontalCells(startingPoint[0], startingPoint[1], e.size);
            }
        });
    }
}
