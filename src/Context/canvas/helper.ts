
import React from 'react'
import { Edirection, Ewalker } from '../../Settings/constants'

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
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DO, DO, WL, WL, WL, WL, WL],//0
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DO, DO, WL, WL, WL, WL, WL],//1
    [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL],//2
    [WL, FL, FL, FL, FL, DE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//3
    [WL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//4
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//5
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, WL],//6
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//7
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//8
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, WL],//9
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//10
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//11
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, WL],//12
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//13
    [WL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//14
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//15
    [WL, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, WL],//16
    [WL, FL, HE, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//17
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],//18
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL],//WL9
];

export function checkValidMoviment(nextPosition, walker) {
    const canvasValue = canvas[nextPosition.y][nextPosition.x];
    let result = walker === Ewalker.HERO ? getHeroValidMoves(canvasValue) : getEnemyValidMoves(canvasValue);

    return result;
}

export function getHeroValidMoves(canvasValue) {
    return {
        valid: canvasValue === ECanvas.Floor || canvasValue === ECanvas.Chest || canvasValue === ECanvas.Trap || canvasValue === ECanvas.MiniDemon || canvasValue === ECanvas.Demon,
        dead: canvasValue === ECanvas.Trap || canvasValue === ECanvas.MiniDemon || canvasValue === ECanvas.Demon,
        chest: canvasValue === ECanvas.Chest,
        door: canvasValue === ECanvas.Door
    }
}

export function getEnemyValidMoves(canvasValue) {
    return {
        valid: canvasValue === ECanvas.Floor || canvasValue === ECanvas.Hero,
        dead: false,
        chest: false,
        door: false
    }
}