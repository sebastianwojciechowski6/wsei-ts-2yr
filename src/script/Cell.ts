import {IPlayer} from "./IPlayer";
import {Game} from "./Game";

export class Cell {
    posX: number;
    posY: number;
    fill: boolean;
    sunken: boolean;
    clicked: boolean;
    element: HTMLTableDataCellElement;
    player: IPlayer;
    game: Game;

    constructor(game: Game, element: HTMLTableDataCellElement, horizontal: number, vertical: number, player: IPlayer) {
        this.game = game;
        this.posY = horizontal;
        this.posX = vertical;
        this.player = player;
        this.element = element;
        this.fill = false;
        this.clicked = false;

        if (player.name == 'Bot')
            element.addEventListener('click', () => {
                this.shoot();
                game.roundChecker();
            });
    }

    isFilled() {
        return this.fill == true;
    }

    isClicked() {
        return this.clicked == true;
    }

    hit() {
        this.clicked = true;
        this.sunken = true;
        this.element.className = 'battlefield_cell_hit';
        this.player.life -= 1;
        if (this.player.name == 'Human') {
            window.setTimeout(() => this.game.botRound(), 300);
        } else
            this.shoot();
    }

    miss() {
        this.clicked = true;
        this.element.classList.add('battlefield_cell_miss');
    }

    shoot() {
        if (!this.isClicked()) {
            if (this.isFilled()) {
                this.hit();
            } else {
                this.miss();
                if (this.player.name == 'Bot')
                    window.setTimeout(() => this.game.botRound(), 300);
            }
        }
        else{
            if (this.player.name == 'Human')
                this.game.botRound();
        }
    }
}
