import {IShip} from "../IShip";

export class Battleship implements IShip {
    name = 'Battleship';
    size = 4;
    turn = 'horizontal';
    sunken = false;
}
