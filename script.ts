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
            return 1;
        else
            return 2;
    }

    setPlayers() {
        this.humanPlayer = new Player(this.playersRaffle());
        this.computerPlayer = new Player(this.playerChecker(this.humanPlayer.sign));
    }

    clickOnComputerSign(x: number, y: number) {
        if (this.cellsVisible[x][y].innerHTML == this.computerPlayer.sign) {
            console.log("There is an computer's sign!");
        }
    }

    clickOnHumanSign(x: number, y: number) {
        if (this.cellsVisible[x][y].innerHTML == this.humanPlayer.sign) {
            console.log('There is your sign!');
        }
    }

    clickCell(x: number, y: number) {
        let arrayIndexer: number = 1;

        let cellPositionX: number = x - arrayIndexer;
        let cellPositionY: number = y - arrayIndexer;

        if (this.gameStarted) {
            this.clickOnComputerSign(cellPositionX, cellPositionY);
            this.clickOnHumanSign(cellPositionX, cellPositionY);

            this.cellsVisible[cellPositionX][cellPositionY].innerHTML == this.humanPlayer.sign;
            this.cellsForPoints[cellPositionX][cellPositionY] = 1;

            // Check if that move causes the win.
            if (this.whoIsTheWinner() == this.humanPlayer) {
                this.gameStarted = false;
                alert("Human Player has won!");
            }
            // Check if that move causes the draw.
            else if (this.checkDraw()) {
                this.gameStarted = false;
                alert("It's a draw!");
            }
            // Game is still on, human putted a sign, time for computer player.
            else {
                // TODO MINMAX ALGORYTHM
                // TODO COMPUTER'S TURN
            }
        }
        else{
            alert("Game over!");
        }
    }


    minMax() {
            // TODO
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

    threeEquality(a: HTMLTableCellElement, b: HTMLTableCellElement, c: HTMLTableCellElement) {
        return (a == b && b == c && a.innerHTML != '')
    }

    whoIsTheWinner() {
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

    let rollPlayers: HTMLButtonElement
        = <HTMLButtonElement>document.querySelector('#rollButton');
    let rollCommunicate: HTMLParagraphElement
        = <HTMLParagraphElement>document.querySelector('#rollCommunicate');

    let board: Board = new Board([[cell11, cell12, cell13], [cell21, cell22, cell23], [cell31, cell32, cell33]])

    cell11.addEventListener('click', () => board.clickCell(1, 1));
    cell12.addEventListener('click', () => board.clickCell(1, 2));
    cell13.addEventListener('click', () => board.clickCell(1, 3));
    cell21.addEventListener('click', () => board.clickCell(2, 1));
    cell22.addEventListener('click', () => board.clickCell(2, 2));
    cell23.addEventListener('click', () => board.clickCell(2, 3));
    cell31.addEventListener('click', () => board.clickCell(3, 1));
    cell32.addEventListener('click', () => board.clickCell(3, 2));
    cell33.addEventListener('click', () => board.clickCell(3, 3));

    rollPlayers.addEventListener('click', () => {
        board.setPlayers();
        rollCommunicate.innerHTML = `You're player ${board.playerChecker(board.humanPlayer.sign)} and you steer ${board.humanPlayer.sign}`
    });

}
