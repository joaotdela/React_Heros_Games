import React from "react";
import './index.css';
import useMiniEnemyMoviment from '../../hooks/useMiniEnemyMoviment'
import { head_ofset, tile_size } from '../../Settings/constants';
const MiniDemon = () => {
    const { position, direction } = useMiniEnemyMoviment({ x: 9, y: 2 })
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
                bottom: tile_size * position.y,
                left: tile_size * position.x,
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
            }}
        />
    );
}

export default MiniDemon;