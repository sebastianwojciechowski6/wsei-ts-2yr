enum Ship {
    Carrier = 5,
    Battleship = 4,
    Cruiser = 3,
    Destroyer = 2
}

class Player {
    ships: number = 10;
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Cell {
    posX: number;
    posY: number;
    fill: boolean;
    sunken: boolean;
    clicked: boolean;

    constructor(element: HTMLTableCellElement, horizontal: number, vertical: number) {
        this.posY = horizontal;
        this.posX = vertical;
        this.fill = false;
        this.clicked = false;
    }
}

class Board {
    cells: Cell[][];
    player: Player;

    constructor(player: Player, cells: Cell[][]) {
        this.player = player;
        this.cells = cells;
    }


    private hit(horizontal: number, vertical: number) {
        this.cells[horizontal][vertical].sunken == true;
        this.cells[horizontal][vertical].clicked == true;
        this.player.ships -= 1;
    }

    private checkSpot(horizontal: number, vertical: number) {

        if (this.cells[horizontal][vertical].clicked == true)
            console.log("You've already hit that spot")
        else if (this.cells[horizontal][vertical].fill == false) {
            console.log("Miss");
            // TODO: Change Round

        } else
            this.hit(horizontal, vertical);

    }

    shoot(horizontal: number, vertical: number) {
        this.checkSpot(horizontal, vertical);
    }
}

class Game {
    finished: boolean;
    bot: Player = new Player("Bot");
    human: Player = new Player("Human");
    tablesContainer: HTMLDivElement = document.querySelector('.tables_container');

    fillBoard(htmlBoard: HTMLTableElement, cellsBoard: Cell[][], rowClassName: string, cellClassName: string) {
        for (let i: number = 0; i < 10; i++) {

            let rowHTML: HTMLTableRowElement = document.createElement('tr');
            rowHTML.className = rowClassName;
            htmlBoard.appendChild(rowHTML);
            let tempArray: Array<Cell> = new Array();

            for (let j: number = 0; j < 10; j++) {

                let cellHTML: HTMLTableDataCellElement = document.createElement('td');
                cellHTML.className = cellClassName;
                rowHTML.appendChild(cellHTML);

                let tempCell: Cell = new Cell(cellHTML, i, j);
                tempArray.push(tempCell);
            }
            cellsBoard.push(tempArray)
        }
    }

    constructor() {
        this.finished = false;

        let humanCells: Cell[][];
        let humanHTMLBoard: HTMLTableElement = document.createElement('table');
        humanHTMLBoard.id = 'player_grid';

        let botCells: Cell[][];
        let botHTMLBoard: HTMLTableElement = document.createElement('table');
        botHTMLBoard.id = 'bot_grid';

        this.fillBoard(humanHTMLBoard, humanCells, 'player_row', 'player_cell_empty battlefield_cell');
        this.fillBoard(botHTMLBoard, botCells, 'bot_row', 'bot_cell_empty battlefield_cell');

        this.tablesContainer.appendChild(humanHTMLBoard);
        this.tablesContainer.appendChild(botHTMLBoard);

        let humanBoard: Board = new Board(this.human, humanCells);
        let botBoard: Board = new Board(this.bot, botCells);

        for (let i: number = 0; i < botCells.length; i++) {
            for (let j: number = 0; j < botCells[i].length; j++) {
                addEventListener('click', () => botBoard.shoot(i, j));
            }
        }
    }
    endGame(winner: string){
        alert(winner + 'winns!');
    }
    nextRound(){

    }
    roundChecker() {
        if(this.bot.ships == 0)
            this.endGame(this.human.name);

        else if(this.human.ships == 0)
            this.endGame(this.bot.name);
        else
            this.nextRound();
    }

}

document.addEventListener('DOMContentLoaded', appStart);

function appStart() {
    let game: Game = new Game();
}
