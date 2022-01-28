import React from "react";
import './index.css';
import { height_objects, tile_size } from '../../Settings/constants';
const Chest = () => {
    return (
        <div
            style={{
                width: tile_size,
                height: height_objects,
                backgroundImage: 'url(./assests/CHEST.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'chest-animation 1s steps(3) infinite',
                top: tile_size * 6,
                left: tile_size * 2,
            }}
        />
    );
}

export default Chest;