import React from "react";
import './index.css';
import useMiniEnemyMoviment from '../../hooks/useMiniEnemyMoviment'
import { demon_size, tile_size } from '../../Settings/constants';
const Demon = () => {
    const { position, direction } = useMiniEnemyMoviment({ x: 4, y: 4 })
    return (
        <div
            style={{
                width: demon_size,
                height: demon_size,
                backgroundImage: 'url(./assests/DEMON.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'demon-animation 0.75s steps(4) infinite',
                bottom: tile_size * position.y,
                left: tile_size * position.x,
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`,
            }}
        />
    );
}

export default Demon;