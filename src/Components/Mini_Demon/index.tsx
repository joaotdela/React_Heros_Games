import React from "react";
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment'
import { head_ofset, tile_size } from '../../Settings/constants';
import { Edirection } from '../../Settings/constants'


//const moviment = {
// position: { x: 5, y: 5 },
//  direction: Edirection.RIGHT,
//};

interface IProps {
    initialPosition: { x: number, y: number }
};

const MiniDemon = (props: IProps) => {


    const moviment = useEnemyMoviment(props.initialPosition);
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
                top: tile_size * moviment.position.y,
                left: tile_size * moviment.position.x,
                transform: `scaleX(${moviment.direction === Edirection.RIGHT ? 1 : -1})`,
                zIndex: 1,
            }}
        />
    );
}

export default MiniDemon;