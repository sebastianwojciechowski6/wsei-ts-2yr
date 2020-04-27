var Ship = /** @class */ (function () {
    function Ship(size) {
        this.type = {
            Carrier: 5,
            Battleship: 4,
            Cruiser: 3,
            Destroyer: 2
        };
        if (size == 5)
            this.type.Carrier;
        else if (size == 4)
            this.type.Battleship;
        else if (size == 3)
            this.type.Cruiser;
        else if (size == 2)
            this.type.Destroyer;
        else
            console.log('Incorrect ship size given.');
    }
    return Ship;
}());
var Player = /** @class */ (function () {
    function Player(name) {
        this.ships = 10;
        this.name = name;
    }
    return Player;
}());
var Cell = /** @class */ (function () {
    function Cell(element, horizontal, vertical) {
        this.posY = horizontal;
        this.posX = vertical;
        this.fill = false;
        this.clicked = false;
    }
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board(player, cells) {
        this.player = player;
        this.cells = cells;
    }
    Board.prototype.hit = function (horizontal, vertical) {
        this.cells[horizontal][vertical].sunken == true;
        this.cells[horizontal][vertical].clicked == true;
    };
    Board.prototype.checkSpot = function (horizontal, vertical) {
        if (this.cells[horizontal][vertical].clicked == true)
            console.log("You've already hit that spot");
        else if (this.cells[horizontal][vertical].fill == false) {
            console.log("Miss");
            // TODO: Change Round
        }
        else
            this.hit(horizontal, vertical);
    };
    Board.prototype.shoot = function (horizontal, vertical) {
        this.checkSpot(horizontal, vertical);
    };
    return Board;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.bot = new Player("Bot");
        this.human = new Player("Human");
        this.botCells = document.querySelectorAll('.player_cells_empty');
        this.humanCells = document.querySelectorAll('.bot_cells_empty');
        var humanBoard = new Board(this.human, [
            [new Cell(this.humanCells.item(0), 0, 0),
                new Cell(this.humanCells.item(1), 0, 1),
                new Cell(this.humanCells.item(2), 0, 2),
                new Cell(this.humanCells.item(3), 0, 3),
                new Cell(this.humanCells.item(4), 0, 4),
                new Cell(this.humanCells.item(5), 0, 5),
                new Cell(this.humanCells.item(6), 0, 6),
                new Cell(this.humanCells.item(7), 0, 7),
                new Cell(this.humanCells.item(8), 0, 8),
                new Cell(this.humanCells.item(9), 0, 9)],
            [new Cell(this.humanCells.item(10), 1, 0),
                new Cell(this.humanCells.item(11), 1, 1),
                new Cell(this.humanCells.item(12), 1, 2),
                new Cell(this.humanCells.item(13), 1, 3),
                new Cell(this.humanCells.item(14), 1, 4),
                new Cell(this.humanCells.item(15), 1, 5),
                new Cell(this.humanCells.item(16), 1, 6),
                new Cell(this.humanCells.item(17), 1, 7),
                new Cell(this.humanCells.item(18), 1, 8),
                new Cell(this.humanCells.item(19), 1, 9)],
            [new Cell(this.humanCells.item(20), 2, 0),
                new Cell(this.humanCells.item(21), 2, 1),
                new Cell(this.humanCells.item(22), 2, 2),
                new Cell(this.humanCells.item(23), 2, 3),
                new Cell(this.humanCells.item(24), 2, 4),
                new Cell(this.humanCells.item(25), 2, 5),
                new Cell(this.humanCells.item(26), 2, 6),
                new Cell(this.humanCells.item(27), 2, 7),
                new Cell(this.humanCells.item(28), 2, 8),
                new Cell(this.humanCells.item(29), 2, 9)],
            [new Cell(this.humanCells.item(30), 3, 0),
                new Cell(this.humanCells.item(31), 3, 1),
                new Cell(this.humanCells.item(32), 3, 2),
                new Cell(this.humanCells.item(33), 3, 3),
                new Cell(this.humanCells.item(34), 3, 4),
                new Cell(this.humanCells.item(35), 3, 5),
                new Cell(this.humanCells.item(36), 3, 6),
                new Cell(this.humanCells.item(37), 3, 7),
                new Cell(this.humanCells.item(38), 3, 8),
                new Cell(this.humanCells.item(39), 3, 9)],
            [new Cell(this.humanCells.item(40), 4, 0),
                new Cell(this.humanCells.item(41), 4, 1),
                new Cell(this.humanCells.item(42), 4, 2),
                new Cell(this.humanCells.item(43), 4, 3),
                new Cell(this.humanCells.item(44), 4, 4),
                new Cell(this.humanCells.item(45), 4, 5),
                new Cell(this.humanCells.item(46), 4, 6),
                new Cell(this.humanCells.item(47), 4, 7),
                new Cell(this.humanCells.item(48), 4, 8),
                new Cell(this.humanCells.item(49), 4, 9)],
            [new Cell(this.humanCells.item(50), 5, 0),
                new Cell(this.humanCells.item(51), 5, 1),
                new Cell(this.humanCells.item(52), 5, 2),
                new Cell(this.humanCells.item(53), 5, 3),
                new Cell(this.humanCells.item(54), 5, 4),
                new Cell(this.humanCells.item(55), 5, 5),
                new Cell(this.humanCells.item(56), 5, 6),
                new Cell(this.humanCells.item(57), 5, 7),
                new Cell(this.humanCells.item(58), 5, 8),
                new Cell(this.humanCells.item(59), 5, 9)],
            [new Cell(this.humanCells.item(60), 6, 0),
                new Cell(this.humanCells.item(61), 6, 1),
                new Cell(this.humanCells.item(62), 6, 2),
                new Cell(this.humanCells.item(63), 6, 3),
                new Cell(this.humanCells.item(64), 6, 4),
                new Cell(this.humanCells.item(65), 6, 5),
                new Cell(this.humanCells.item(66), 6, 6),
                new Cell(this.humanCells.item(67), 6, 7),
                new Cell(this.humanCells.item(68), 6, 8),
                new Cell(this.humanCells.item(69), 6, 9)],
            [new Cell(this.humanCells.item(70), 7, 0),
                new Cell(this.humanCells.item(71), 7, 1),
                new Cell(this.humanCells.item(72), 7, 2),
                new Cell(this.humanCells.item(73), 7, 3),
                new Cell(this.humanCells.item(74), 7, 4),
                new Cell(this.humanCells.item(75), 7, 5),
                new Cell(this.humanCells.item(76), 7, 6),
                new Cell(this.humanCells.item(77), 7, 7),
                new Cell(this.humanCells.item(78), 7, 8),
                new Cell(this.humanCells.item(79), 7, 9)],
            [new Cell(this.humanCells.item(80), 8, 0),
                new Cell(this.humanCells.item(81), 8, 1),
                new Cell(this.humanCells.item(82), 8, 2),
                new Cell(this.humanCells.item(83), 8, 3),
                new Cell(this.humanCells.item(84), 8, 4),
                new Cell(this.humanCells.item(85), 8, 5),
                new Cell(this.humanCells.item(86), 8, 6),
                new Cell(this.humanCells.item(87), 8, 7),
                new Cell(this.humanCells.item(88), 8, 8),
                new Cell(this.humanCells.item(89), 8, 9)],
            [new Cell(this.humanCells.item(90), 9, 0),
                new Cell(this.humanCells.item(91), 9, 1),
                new Cell(this.humanCells.item(92), 9, 2),
                new Cell(this.humanCells.item(93), 9, 3),
                new Cell(this.humanCells.item(94), 9, 4),
                new Cell(this.humanCells.item(95), 9, 5),
                new Cell(this.humanCells.item(96), 9, 6),
                new Cell(this.humanCells.item(97), 9, 7),
                new Cell(this.humanCells.item(98), 9, 8),
                new Cell(this.humanCells.item(99), 9, 9)]
        ]);
        var botBoard = new Board(this.bot, [
            [new Cell(this.botCells.item(0), 0, 0),
                new Cell(this.botCells.item(1), 0, 1),
                new Cell(this.botCells.item(2), 0, 2),
                new Cell(this.botCells.item(3), 0, 3),
                new Cell(this.botCells.item(4), 0, 4),
                new Cell(this.botCells.item(5), 0, 5),
                new Cell(this.botCells.item(6), 0, 6),
                new Cell(this.botCells.item(7), 0, 7),
                new Cell(this.botCells.item(8), 0, 8),
                new Cell(this.botCells.item(9), 0, 9)],
            [new Cell(this.botCells.item(10), 1, 0),
                new Cell(this.botCells.item(11), 1, 1),
                new Cell(this.botCells.item(12), 1, 2),
                new Cell(this.botCells.item(13), 1, 3),
                new Cell(this.botCells.item(14), 1, 4),
                new Cell(this.botCells.item(15), 1, 5),
                new Cell(this.botCells.item(16), 1, 6),
                new Cell(this.botCells.item(17), 1, 7),
                new Cell(this.botCells.item(18), 1, 8),
                new Cell(this.botCells.item(19), 1, 9)],
            [new Cell(this.botCells.item(20), 2, 0),
                new Cell(this.botCells.item(21), 2, 1),
                new Cell(this.botCells.item(22), 2, 2),
                new Cell(this.botCells.item(23), 2, 3),
                new Cell(this.botCells.item(24), 2, 4),
                new Cell(this.botCells.item(25), 2, 5),
                new Cell(this.botCells.item(26), 2, 6),
                new Cell(this.botCells.item(27), 2, 7),
                new Cell(this.botCells.item(28), 2, 8),
                new Cell(this.botCells.item(29), 2, 9)],
            [new Cell(this.botCells.item(30), 3, 0),
                new Cell(this.botCells.item(31), 3, 1),
                new Cell(this.botCells.item(32), 3, 2),
                new Cell(this.botCells.item(33), 3, 3),
                new Cell(this.botCells.item(34), 3, 4),
                new Cell(this.botCells.item(35), 3, 5),
                new Cell(this.botCells.item(36), 3, 6),
                new Cell(this.botCells.item(37), 3, 7),
                new Cell(this.botCells.item(38), 3, 8),
                new Cell(this.botCells.item(39), 3, 9)],
            [new Cell(this.botCells.item(40), 4, 0),
                new Cell(this.botCells.item(41), 4, 1),
                new Cell(this.botCells.item(42), 4, 2),
                new Cell(this.botCells.item(43), 4, 3),
                new Cell(this.botCells.item(44), 4, 4),
                new Cell(this.botCells.item(45), 4, 5),
                new Cell(this.botCells.item(46), 4, 6),
                new Cell(this.botCells.item(47), 4, 7),
                new Cell(this.botCells.item(48), 4, 8),
                new Cell(this.botCells.item(49), 4, 9)],
            [new Cell(this.botCells.item(50), 5, 0),
                new Cell(this.botCells.item(51), 5, 1),
                new Cell(this.botCells.item(52), 5, 2),
                new Cell(this.botCells.item(53), 5, 3),
                new Cell(this.botCells.item(54), 5, 4),
                new Cell(this.botCells.item(55), 5, 5),
                new Cell(this.botCells.item(56), 5, 6),
                new Cell(this.botCells.item(57), 5, 7),
                new Cell(this.botCells.item(58), 5, 8),
                new Cell(this.botCells.item(59), 5, 9)],
            [new Cell(this.botCells.item(60), 6, 0),
                new Cell(this.botCells.item(61), 6, 1),
                new Cell(this.botCells.item(62), 6, 2),
                new Cell(this.botCells.item(63), 6, 3),
                new Cell(this.botCells.item(64), 6, 4),
                new Cell(this.botCells.item(65), 6, 5),
                new Cell(this.botCells.item(66), 6, 6),
                new Cell(this.botCells.item(67), 6, 7),
                new Cell(this.botCells.item(68), 6, 8),
                new Cell(this.botCells.item(69), 6, 9)],
            [new Cell(this.botCells.item(70), 7, 0),
                new Cell(this.botCells.item(71), 7, 1),
                new Cell(this.botCells.item(72), 7, 2),
                new Cell(this.botCells.item(73), 7, 3),
                new Cell(this.botCells.item(74), 7, 4),
                new Cell(this.botCells.item(75), 7, 5),
                new Cell(this.botCells.item(76), 7, 6),
                new Cell(this.botCells.item(77), 7, 7),
                new Cell(this.botCells.item(78), 7, 8),
                new Cell(this.botCells.item(79), 7, 9)],
            [new Cell(this.botCells.item(80), 8, 0),
                new Cell(this.botCells.item(81), 8, 1),
                new Cell(this.botCells.item(82), 8, 2),
                new Cell(this.botCells.item(83), 8, 3),
                new Cell(this.botCells.item(84), 8, 4),
                new Cell(this.botCells.item(85), 8, 5),
                new Cell(this.botCells.item(86), 8, 6),
                new Cell(this.botCells.item(87), 8, 7),
                new Cell(this.botCells.item(88), 8, 8),
                new Cell(this.botCells.item(89), 8, 9)],
            [new Cell(this.botCells.item(90), 9, 0),
                new Cell(this.botCells.item(91), 9, 1),
                new Cell(this.botCells.item(92), 9, 2),
                new Cell(this.botCells.item(93), 9, 3),
                new Cell(this.botCells.item(94), 9, 4),
                new Cell(this.botCells.item(95), 9, 5),
                new Cell(this.botCells.item(96), 9, 6),
                new Cell(this.botCells.item(97), 9, 7),
                new Cell(this.botCells.item(98), 9, 8),
                new Cell(this.botCells.item(99), 9, 9)]
        ]);
        this.botCells.forEach(function (cell) {
            cell.addEventListener('click', botBoard.shoot()); //TODO: NodeListOf.item ma index jednoelementowy, a potrzebujemy 2 współrzędne do strzału
        });
    }
    Game.prototype.nextRound = function () {
    };
    return Game;
}());
document.addEventListener('DOMContentLoaded', appStart);
function appStart() {
    var game = new Game();
}
