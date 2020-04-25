import {Player} from "./player";
import {Cell} from "./cell";

export class Board {
    cells: Cell[][];
    player: Player;

    constructor(player: Player, cell: Cell) {
        this.player = player;
    }
}
