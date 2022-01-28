import React from 'react';
import { tile_size } from '../../Settings/constants'
interface Iprops {
    position: { x: number, y: number },
    text: number,
}



function Tile(props: Iprops) {
    function TileColor() {
        switch (props.text) {
            case 0:
                return 'yellow';
            case 1:
                return 'red';
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
        }}>
            {props.text}
        </div>
    )
}

export default Tile;