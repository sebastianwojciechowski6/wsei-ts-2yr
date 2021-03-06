import {IPlayer} from "../IPlayer";
import {Battleship} from "../ships/Battleship";
import {Carrier} from "../ships/Carrier";
import {Cruiser} from "../ships/Cruiser";
import {Destroyer} from "../ships/Destroyer";
import {Submarine} from "../ships/Submarine";

export class Human implements IPlayer {
    name = 'Human';
    life = 17;
    ships = [new Battleship(), new Carrier(), new Cruiser(), new Destroyer(), new Submarine()];
}
