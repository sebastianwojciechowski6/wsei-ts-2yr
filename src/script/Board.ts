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
    //  TODO: BEZKOLIZYJNOŚĆ PRZY GENEROWANIU STATKÓW

    fillVerticalCells(startingX: number, startingY: number, size: number){
        for(let i: number = startingX; i < (startingX + size); i++){
            this.cells[i][startingY].fill = true;
            if(this.player.name == 'Human')
                this.cells[i][startingY].element.className = 'player_cell_ship'
        }
    }

    fillHorizontalCells(startingX: number, startingY: number, size: number){
        for(let i: number = startingY; i < (startingY + size); i++){
            this.cells[startingX][i].fill = true;
            if(this.player.name == 'Human')
                this.cells[startingX][i].element.className = 'player_cell_ship'
        }
    }

    insertShips(ships: IShip[]) {
        ships.forEach((e) => {
            this.turnShipGenerator(e);
            let startingPoint: Array<number> = this.positionGenerator();
            console.log(e.turn);

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
