import {Human} from "./players/Human";
import {Board} from "./Board";
import {Bot} from "./players/Bot";
import {Cell} from "./Cell";
import {IPlayer} from "./IPlayer";

export class Game {
    bot: Bot = new Bot();
    botBoard: Board;
    human: Human = new Human();
    humanBoard: Board;

    tablesContainer: HTMLDivElement = document.querySelector('.tables_container');
    generateShipsButton: HTMLButtonElement = document.querySelector('.generate_ships');
    resetButton: HTMLButtonElement = document.querySelector('.reset_hidden');

    fillBoard(htmlBoard: HTMLTableElement, cellsBoard: Cell[][], player: IPlayer, rowClassName: string, cellClassName: string) {
        for (let i: number = 0; i < 10; i++) {

            let rowHTML: HTMLTableRowElement = document.createElement('tr');
            rowHTML.className = rowClassName;
            htmlBoard.appendChild(rowHTML);
            let tempArray: Array<Cell> = [];

            for (let j: number = 0; j < 10; j++) {

                let cellHTML: HTMLTableDataCellElement = document.createElement('td');
                cellHTML.className = cellClassName;
                rowHTML.appendChild(cellHTML);

                let tempCell: Cell = new Cell(this, cellHTML, i, j, player);
                tempArray.push(tempCell);
            }
            cellsBoard.push(tempArray);
        }
    }

    constructor() {
        this.humanBoard = new Board(this.human);
        this.botBoard = new Board(this.bot);

        this.generateShipsButton.addEventListener('click', () => {
            this.fillBoard(humanHTMLBoard, this.humanBoard.cells, this.human, 'player_row', 'player_cell_empty');
            this.fillBoard(botHTMLBoard, this.botBoard.cells, this.bot, 'bot_row', 'bot_cell_empty');

            this.humanBoard.insertShips(this.human.ships);
            this.botBoard.insertShips(this.bot.ships);
            this.generateShipsButton.className = 'generate_ships_hidden';
            this.resetButton.className = 'reset';
        });
        this.resetButton.addEventListener('click', () => {
            location.reload();
        });

        let humanHTMLBoard: HTMLTableElement = document.createElement('table');
        humanHTMLBoard.id = 'player_grid';

        let botHTMLBoard: HTMLTableElement = document.createElement('table');
        botHTMLBoard.id = 'bot_grid';



        this.tablesContainer.appendChild(humanHTMLBoard);
        this.tablesContainer.appendChild(botHTMLBoard);



    }

    endGame(winner: string) {
        alert(winner + ' won!');
    }

    botRound() {
        let x = this.humanBoard.positionGenerator()[0];
        let y = this.humanBoard.positionGenerator()[1];

        if (!this.humanBoard.cells[x][y].isClicked())
            this.humanBoard.cells[x][y].shoot();
        else
            this.botRound();
    }

    roundChecker() {
        if (this.bot.life == 0)
            this.endGame(this.human.name);

        else if (this.human.life == 0)
            this.endGame(this.bot.name);
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new Game();
});

