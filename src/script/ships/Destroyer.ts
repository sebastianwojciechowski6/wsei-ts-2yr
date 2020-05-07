import {IShip} from "../IShip";

export class Destroyer implements IShip {
    name = 'Destroyer';
    size = 2;
    turn = 'horizontal';
    sunken = false;
}
