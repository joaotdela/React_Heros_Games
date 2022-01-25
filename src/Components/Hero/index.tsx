import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import './index.css';
import { head_ofset, tile_size } from '../../Settings/constants';
import useMiniEnemyMoviment from '../../hooks/useMiniEnemyMoviment'


const initialPosition = {
    x: 2,
    y: 1
}
const Hero = () => {
    const { position, direction } = useMiniEnemyMoviment(initialPosition);
    return (
        <div
            style={{
                width: tile_size,
                height: tile_size + head_ofset,
                backgroundPosition: `0px -${tile_size - head_ofset}px`,
                backgroundImage: 'url(./assests/HERO.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'hero-animation 0.75s steps(4) infinite',
                bottom: tile_size * position.y,
                left: tile_size * position.x,
                transform: `scalex(${direction === 'RIGHT' ? 1 : -1}) `,
                zIndex: 3,
            }}
        />
    )
}

export default Hero;