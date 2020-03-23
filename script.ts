class Board {
    gameStarted: boolean = true;
    cellsVisible: HTMLTableCellElement[][];
    humanPlayer: Player;
    computerPlayer: Player;
    cellsForPoints: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    constructor(cells: HTMLTableCellElement[][]) {
        this.cellsVisible = cells;
    }

    playersRaffle() {
        return Math.floor(Math.random() * 2) + 1;
    }

    playerChecker(sign: string) {
        if (sign == 'X')
            return 0;
        else
            return 1;
    }

    startGame() {
        this.humanPlayer = new Player(this.playersRaffle());
        this.computerPlayer = new Player(this.playerChecker(this.humanPlayer.sign));

    }

    clickCell(x: number, y: number) {
        let arrayIndexer: number = 1;

        let cellPositionX: number = x - arrayIndexer;
        let cellPositionY: number = y - arrayIndexer;

        if (this.gameStarted) {
            // Click on computer player's sign option.
            if (this.cellsVisible[cellPositionX][cellPositionY].innerHTML == this.computerPlayer.sign) {
                console.log("There is an computer's sign!");
            }
            else {
                // Click on human player's sign option.
                if (this.cellsVisible[cellPositionX][cellPositionY].innerHTML == this.humanPlayer.sign) {
                    console.log('There is your sign!');
                }
                // Click on empty cell.
                else {
                    // Write sign of human player to cell.
                    this.cellsVisible[cellPositionX][cellPositionY].innerHTML == this.humanPlayer.sign;
                    // Add 1 point to cells array.
                    this.cellsForPoints[cellPositionX][cellPositionY] = 1;
                    // Check if that move causes the win.
                    if (this.checkWinner() == this.humanPlayer) {
                        this.gameStarted = false;
                        alert("Human Player has won!");
                    }
                    // Check if that move causes the draw.
                    else {
                        if (this.checkDraw()) {
                            this.gameStarted = false;
                            alert("It's a draw!");
                        }
                        // Game is still on, human putted a sign, time for computer player.
                        else {



                        }
                    }

                }
            }
        }

    }

    threeEquality(a: HTMLTableCellElement, b: HTMLTableCellElement, c: HTMLTableCellElement) {
        return (a == b && b == c && a.innerHTML != '')
    }

    checkDraw() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.cellsForPoints[i][j] == 0)
                    return false;
            }
        }
        return true;

    }

    checkWinner() {
        let winningSign: string;

        for (let i = 0; i < 3; i++) {    //Horizontal
            if (this.threeEquality(this.cellsVisible[i][0], this.cellsVisible[i][1], this.cellsVisible[i][2]))
                winningSign = this.cellsVisible[i][0].innerHTML;
        }
        for (let i = 0; i < 3; i++) {    //Vertical
            if (this.threeEquality(this.cellsVisible[0][i], this.cellsVisible[0][i], this.cellsVisible[0][i]))
                winningSign = this.cellsVisible[0][i].innerHTML;
        }
        //Diagonal
        if (this.threeEquality(this.cellsVisible[0][0], this.cellsVisible[1][1], this.cellsVisible[2][2]))
            winningSign = this.cellsVisible[0][0].innerHTML;
        if (this.threeEquality(this.cellsVisible[0][2], this.cellsVisible[1][1], this.cellsVisible[2][0]))
            winningSign = this.cellsVisible[0][2].innerHTML;

        if (winningSign == this.humanPlayer.sign)
            return this.humanPlayer;
        else
            return this.computerPlayer;
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
}

document.addEventListener("DOMContentLoaded", appStart);

function appStart() {
    let cell11: HTMLTableCellElement
        = <HTMLTableCellElement>document.querySelector('#cell11');
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
