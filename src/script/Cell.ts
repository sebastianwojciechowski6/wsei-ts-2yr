import {IPlayer} from "./IPlayer";

export class Cell {
    posX: number;
    posY: number;
    fill: boolean;
    sunken: boolean;
    clicked: boolean;
    element: HTMLTableDataCellElement;
    player: IPlayer;

    constructor(element: HTMLTableDataCellElement, horizontal: number, vertical: number, player: IPlayer) {
        this.posY = horizontal;
        this.posX = vertical;
        this.player = player;
        this.element = element;
        this.fill = false;
        this.clicked = false;

        if (player.name == 'Bot')
            element.addEventListener('click', () => this.shoot());
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
        this.element.classList.add('battlefield_cell_hit');
        this.player.life -= 1;
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
            }
        }
    }
}
