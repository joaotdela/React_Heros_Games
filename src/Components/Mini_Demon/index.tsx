import React from "react";
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment'
import { head_ofset, tile_size } from '../../Settings/constants';
import { Edirection } from '../../Settings/constants'


const MiniDemon = () => {
    const { position, direction } = useEnemyMoviment({ x: 9, y: 2 })
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
                transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
                zIndex: 1,
            }}
        />
    );
}

export default MiniDemon;