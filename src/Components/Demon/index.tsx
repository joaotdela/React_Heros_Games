import React from "react";
import './index.css';
import { demon_size, tile_size } from '../../Settings/constants';
const Demon = () => {
    return (
        <div
            style={{
                width: demon_size,
                height: demon_size,
                backgroundImage: 'url(./assests/DEMON.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'demon-animation 0.75s steps(4) infinite',
                bottom: tile_size * 4,
                left: tile_size * 2,
            }}
        />
    );
}

export default Demon;