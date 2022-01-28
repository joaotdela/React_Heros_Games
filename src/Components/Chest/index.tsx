import React from "react";
import './index.css';
import { height_objects, tile_size } from '../../Settings/constants';

interface IProps {
    initialPosition: { x: number, y: number }
}



const Chest = (props: IProps) => {
    return (
        <div
            style={{
                width: tile_size,
                height: height_objects,
                backgroundImage: 'url(./assests/CHEST.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'chest-animation 1s steps(3) infinite',
                top: tile_size * props.initialPosition.y,
                left: tile_size * props.initialPosition.x,
            }}
        />
    );
}

export default Chest;