import useInterval from '@use-it/interval';
import React from 'react';
import { Edirection, Ewalker } from '../../Settings/constants';
import { CanvasContext } from '../../Context/canvas';


function useEnemyMoviment(initialPosition: any) {
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useInterval(function enemyMove() {
        var random = Math.floor(Math.random() * 4);
        var directionArray = Object.values(Edirection);
        const randomDirections = directionArray[random]

        const moviment = canvasContext.updateCanvas(randomDirections, positionState, Ewalker.ENEMY);


        if (moviment.nextMoviment.valid) {
            updatePositionState(moviment.nextPosition);
            updateDirectionState(randomDirections);
        }

    }, 2000);
    return {
        position: positionState,
        direction: directionSide,
    }
}

export default useEnemyMoviment;