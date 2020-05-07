import {IShip} from "./IShip";

export interface IPlayer {
    name: string;
    life: number;
    ships: IShip[];
}
