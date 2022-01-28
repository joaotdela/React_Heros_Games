
import { Edirection } from '../../Settings/constants'

export function handleNextMoviment(direction, position) {
    switch (direction) {
        case Edirection.LEFT:
            return { x: position.x - 1, y: position.y };
        case Edirection.RIGHT:
            return { x: position.x + 1, y: position.y };
        case Edirection.UP:
            return { x: position.x, y: position.y - 1 };
        case Edirection.DOWN:
            return { x: position.x, y: position.y + 1 };
    }
}

export enum ECanvas {
    Floor = 0,
    Wall = 1,
    Door = 2,
    Trap = 3,
    MiniDemon = 4,
    Demon = 5,
    Chest = 6,
    Hero = 7
}
const FL = ECanvas.Floor;
const WL = ECanvas.Wall;
const DO = ECanvas.Door;
const TR = ECanvas.Trap;
const MD = ECanvas.MiniDemon;
const DE = ECanvas.Demon;
const CH = ECanvas.Chest;
const HE = ECanvas.Hero;

export const canvas = [
    //0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],//0
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//1
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, HE, FL, WL],//2
    [WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//3
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//4
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//5
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//6
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//7
    [WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//8
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//9
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//10
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//11
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//12
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//13
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//14
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//15
    [WL, WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//16
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//17
    [WL, WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//18
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],//WL9
];
