import {IShip} from "../IShip";

export class Submarine implements IShip {
    name = 'Submarine';
    size = 3;
    turn = 'horizontally';
    sunken = false;
}
