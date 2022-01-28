import React from "react";
import './index.css';
import { height_objects,tile_size } from '../../Settings/constants';
const Trap = () => {
    return (
        <div
            style={{
                width: tile_size,
                height: height_objects,
                backgroundImage: 'url(./assests/TRAP.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'trap-animation 1s steps(8) infinite',
                top: tile_size * 3,
                left: tile_size * 10,
            }}
        />
    );
}

export default Trap;