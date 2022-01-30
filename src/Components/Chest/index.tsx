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
                animation: 'chest-animation 1s steps(3) infinite',
            }}
        />
    );
}

export default Chest;