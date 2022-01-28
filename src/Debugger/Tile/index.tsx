import React from 'react';
import { ECanvas } from '../../Context/canvas/helper';
import { tile_size } from '../../Settings/constants'
interface Iprops {
    position: { x: number, y: number },
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
                return '';
            case ECanvas.Chest:
                return '';
            case ECanvas.MiniDemon:
                return '';
            case ECanvas.Demon:
                return '';
            case ECanvas.Door:
                return '';

        }
    }
    const color = TileColor();
    return (
        <div style={{
            width: tile_size,
            height: tile_size,
            top: tile_size * props.position.x,
            left: tile_size * props.position.y,
            position: 'absolute',
            border: `2px solid ${color}`,
            color: color,
            fontSize: 32,
        }}>
            {props.text}
        </div>
    )
}

export default Tile;