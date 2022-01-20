import React, { useState } from "react";
import './index.css';
import { head_ofset, tile_size } from '../../Settings/constants';
import useEventListener from "@use-it/event-listener";


const initialPosition = {
    x: 3,
    y: 2
}

const Hero = () => {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [directionSide, updateDirectionState] = useState('RIGHT');
    const [directionUp, updateDirectionUPState] = useState('UP');
    useEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft' || event.which === 65) {
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState('LEFT')
        } else if (event.key === 'ArrowRight' || event.which === 68) {
            const newPosition = {
                x: positionState.x + 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState('RIGHT')
        } else if (event.key === 'ArrowUp' || event.which === 87) {
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1
            };
            updatePositionState(newPosition)
            updateDirectionUPState('UP')
        } else if (event.key === 'ArrowDown' || event.which === 83) {
            const newPosition = {
                x: positionState.x,
                y: positionState.y - 1
            };
            updatePositionState(newPosition)
            updateDirectionUPState('DOWN')
        }


    })
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
                bottom: tile_size * positionState.y,
                left: tile_size * positionState.x,
                transform: `scalex(${directionSide === 'RIGHT' ? 1 : -1}) scaley(${directionUp === 'UP' ? 1 : -1}) `,

            }}
        />
    );
}

export default Hero;