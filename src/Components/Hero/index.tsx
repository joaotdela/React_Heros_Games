import React, { useState } from "react";
import useEventListener from "@use-it/event-listener";
import './index.css';
import { head_ofset, tile_size } from '../../Settings/constants';
import useHeroMoviment from '../../hooks/useHeroMoviment'
import { Edirection } from '../../Settings/constants'

interface IProps {
    initialPosition: { x: number, y: number }
}
const Hero = (props: IProps) => {
    const { position, direction } = useHeroMoviment(props.initialPosition);
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
                top: tile_size * position.y - head_ofset,
                left: tile_size * position.x,
                transform: `scalex(${direction === Edirection.RIGHT ? 1 : -1}) `,
                zIndex: 3,
            }}
        />
    )
}

export default Hero;