import React from "react";
import './index.css';
import { head_ofset, tile_size } from '../../Settings/constants';
const MiniDemon = () => {
    return (
        <div
            style={{
                width: tile_size,
                height: tile_size + head_ofset,
                backgroundPosition: `0px -${tile_size - head_ofset}px`,
                backgroundImage: 'url(./assests/MINI-DEMON.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'minidemon-animation 0.75s steps(4) infinite',
                bottom: tile_size * 9,
                left: tile_size * 2,
            }}
        />
    );
}

export default MiniDemon;