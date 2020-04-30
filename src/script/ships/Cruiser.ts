import {IShip} from "../IShip";

export class Cruiser implements IShip {
    name = 'Cruiser';
    size = 3;
    turn = 'horizontally';
    sunken = false;
}
