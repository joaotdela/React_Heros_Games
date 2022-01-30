import React from "react";
import './index.css';
import { height_objects, tile_size } from '../../Settings/constants';
import { ChestContext } from "../../Context/chest";


interface IProps {
    initialPosition: { x: number, y: number }
}



const Chest = (props: IProps) => {
    const chestsContext = React.useContext(ChestContext);
    console.log('abriu', chestsContext.openedChests.total);
    console.log('posição', chestsContext.openedChests.positions);
    const shouldAnimate = chestsContext.openedChests.positions.find((position) => {
        const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

        return match;
    });

    const animation = shouldAnimate ? 'chest-animation 1s steps(3)' : null;


    return (
        <div
            style={{
                width: tile_size,
                height: height_objects,
                backgroundImage: 'url(./assests/CHEST.png)',
                backgroundRepeat: 'no-repeat',
                position: "absolute",
                top: tile_size * props.initialPosition.y,
                left: tile_size * props.initialPosition.x,
                animation: animation,
            }}
        />
    );
}

export default Chest;