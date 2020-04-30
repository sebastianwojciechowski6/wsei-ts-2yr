import {IShip} from "../IShip";

export class Carrier implements IShip {
    name = 'Carrier';
    size = 5;
    turn = 'horizontally';
    sunken = false;
}
