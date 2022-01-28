import React from 'react';
import { canvas } from '../Context/canvas/helper';
import Tile from './Tile';

function getCanvasMap() {
    const tilesArray = [];
    for (let y = 0; y < canvas.length; y++) {
        const canvasY = canvas[y];

        for (let x = 0; x < canvasY.length; x++) {
            const canvasYX = canvasY[x];

            const position = { x: x, y: y };

            const text = canvasYX;
            tilesArray.push(<Tile position={position} text={text} />);
        }
    }
    return tilesArray;
}

function Debugger() {
    const tiles = getCanvasMap();
    return (
        <div>
            {tiles}
        </div>
    );
}

export default Debugger;