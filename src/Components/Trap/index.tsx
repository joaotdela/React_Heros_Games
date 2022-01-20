import React from "react";
import './index.css';
import { head_ofset, height_objects, tile_size } from '../../Settings/constants';
import { timeEnd } from "console";
const Trap = () => {
    return (
        <div
            style={{
                width: tile_size,
                height: 55,
                backgroundImage: 'url(./assests/TRAP.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'trap-animation 1s steps(8) infinite',
                bottom: tile_size,
                left: tile_size * 10,
            }}
        />
    );
}

export default Trap;