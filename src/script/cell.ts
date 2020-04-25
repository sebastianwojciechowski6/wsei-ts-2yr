export class Cell{
    posX: number;
    posY: number;
    fill: boolean;
    clicked: boolean;

    constructor(element: HTMLTableCellElement, x: number, y: number) {
        this.posX = x;
        this.posY = y;
    }
}
