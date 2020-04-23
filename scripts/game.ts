import {Board} from "./board";
import {Cell} from "./cell";
import {Player} from "./player";

export class Game{
    bot: Player = new Player("Bot");
    player: Player = new Player("Human");
    constructor() {
        if(this.bot.ships = 0){
            alert(this.player.name + "has won!");
        }
        else if(this.player.ships = 0){
            alert(this.bot.name + "has won!");
        }
        else{
            document.querySelectorAll('.battlefield_empty').forEach(cell => {
                cell.addEventListener('click', event => {
                    this.clickEmptyCell(cell)
                })
            })
        }
    }

    clickEmptyCell(cell) {
        if(cell.className == 'bot_cell_ship battlefield_cell' || cell.className == 'player_cell_ship battlefield_cell'){
            cell.className = 'battlefield_cell_hit';
            cell.innerHTML = 'X';
            this.bot.ships -= 1;
        }
        else{
            cell.className = 'battlefield_cell_miss';
            cell.innerHTML = "+"
        }
    }
}
