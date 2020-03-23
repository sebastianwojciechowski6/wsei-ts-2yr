class Board {
    gameStarted: boolean = true;
    cellsVisible: HTMLTableCellElement[][];
    // cellsForPoints: number[][] = [
    //     [0,0,0],
    //     [0,0,0],
    //     [0,0,0]
    // ];

    constructor(cells: HTMLTableCellElement[][]) {
        this.cellsVisible = cells;
    }

    clickCell(x: number, y: number) {
        let arrayIndexer: number = 1;
        let cellPositionX: number = x - arrayIndexer;
        let cellPositionY: number = y - arrayIndexer;

        if (this.gameStarted) {
            if (this.cellsVisible[cellPositionX][cellPositionY].innerHTML == 'X') {
                console.log('There is an AI sign!')
            } else {
                if (this.cellsVisible[cellPositionX][cellPositionY].innerHTML == 'O') {
                    console.log('There is your sign!')
                } else {
                    this.cellsVisible[cellPositionX][cellPositionY].innerHTML == 'O';
                    // this.cellsForPoints[cellPositionX][cellPositionY] = 1;


                }
            }
        }

    }

    threeEquality(a: HTMLTableCellElement, b: HTMLTableCellElement, c: HTMLTableCellElement) {
        return (a == b && b == c && a.innerHTML != '')
    }

    checkWin() {
        let winner: string;

        for (let i = 0; i < 3; i++) {    //Horizontal
            if (this.threeEquality(this.cellsVisible[i][0], this.cellsVisible[i][1], this.cellsVisible[i][2]))
                winner = this.cellsVisible[i][0].innerHTML;
        }
        for (let i = 0; i < 3; i++) {    //Vertical
            if (this.threeEquality(this.cellsVisible[0][i], this.cellsVisible[0][i], this.cellsVisible[0][i]))
                winner = this.cellsVisible[0][i].innerHTML;
        }
        //Diagonal
        if (this.threeEquality(this.cellsVisible[0][0], this.cellsVisible[1][1], this.cellsVisible[2][2]))
            winner = this.cellsVisible[0][0].innerHTML;
        if (this.threeEquality(this.cellsVisible[0][2], this.cellsVisible[1][1], this.cellsVisible[2][0]))
            winner = this.cellsVisible[0][2].innerHTML;
    }
}

class Player {
    sign: string;

    constructor(num: number) {
        if (num == 1)
            this.sign = 'X';
        else if (num == 2)
            this.sign = 'O';
        else
            console.log('Player number error.')
    }

    GetSign() {
        return this.sign;
    }
}

class Game {
    Round() {
        // if()
        // return 2;
        // if()
        // return 1;
    }
}

document.addEventListener("DOMContentLoaded", appStart);

function appStart() {
    let cell11: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cel11');
    let cell12: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell12');
    let cell13: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell13');
    let cell21: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell21');
    let cell22: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell22');
    let cell23: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell23');
    let cell31: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell31');
    let cell32: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell32');
    let cell33: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell33');

    let board: Board = new Board([[cell11, cell12, cell13], [cell21, cell22, cell23], [cell31, cell32, cell33]])

    // cell11.addEventListener('click',)
}
