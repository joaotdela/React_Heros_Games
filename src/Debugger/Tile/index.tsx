import React from 'react';
import { ECanvas } from '../../Context/canvas/helper';
import { tile_size } from '../../Settings/constants'
interface Iprops {
    position: { y: number, x: number },
    text: number,
}



function Tile(props: Iprops) {
    function TileColor() {
        switch (props.text) {
            case ECanvas.Floor:
                return 'darkgrey';
            case ECanvas.Wall:
                return 'yellow';
            case ECanvas.Hero:
                return 'Magenta';
            case ECanvas.Trap:
                return 'chartreuse';
            case ECanvas.Chest:
                return 'cyan';
            case ECanvas.MiniDemon:
            case ECanvas.Demon:
                return 'red';
            case ECanvas.Door:
                return 'white';

        }
    }
    const color = TileColor();
    return (
        <div style={{
            width: tile_size,
            height: tile_size,
            top: tile_size * props.position.y,
            left: tile_size * props.position.x,
            position: 'absolute',
            border: `2px solid ${color}`,
            color: color,
            fontSize: 32,
            zIndex: 8,
        }}>
            {props.text}
        </div>
    )
}

export default Tile;