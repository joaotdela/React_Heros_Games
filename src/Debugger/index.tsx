import React from 'react';
import { CanvasContext } from '../Context/canvas';
import { canvas } from '../Context/canvas/helper';
import Tile from './Tile';

function getCanvasMap(canvas) {
    const tilesArray = [];
    for (let y = 0; y < canvas.length; y++) {
        const canvasY = canvas[y];

        for (let x = 0; x < canvasY.length; x++) {
            const canvasYX = canvasY[x];

            const position = { x: x, y: y };

            const text = canvasYX;
            const key = `${x}-${y}`;
            tilesArray.push(<Tile key={key} position={position} text={text} />);
        }
    }
    return tilesArray;
}

function Debugger() {

    const canvasContext = React.useContext(CanvasContext);

    const tiles = getCanvasMap(canvasContext.canvas);

    return (
        <div>
            {tiles}
        </div>
    );
}

export default Debugger;