import React from "react";
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment'
import { demon_size, tile_size } from '../../Settings/constants';
import { Edirection } from '../../Settings/constants'

interface IProps{
    initialPosition: {x: number, y: number}
}


const Demon = (props: IProps) => {
    const { position, direction } = useEnemyMoviment(props.initialPosition)
    return (
        <div
            style={{
                width: demon_size,
                height: demon_size,
                backgroundImage: 'url(./assests/DEMON.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                animation: 'demon-animation 0.75s steps(4) infinite',
                top: tile_size * position.y,
                left: tile_size * position.x,
                transform: `scaleX(${direction === Edirection.RIGHT ? 1 : -1})`,
                zIndex: 1,
            }}
        />
    );
}

export default Demon;