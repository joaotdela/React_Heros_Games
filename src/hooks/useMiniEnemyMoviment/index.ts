import useInterval from '@use-it/interval'
import React from 'react'
import { Edirection } from '../../Settings/constants'
import { handleNextMoviment } from '../../Context/canvas/helper'

function useMiniEnemyMoviment(initialPosition: any) {

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useInterval(function enemyMiniMove() {
        var random = Math.floor(Math.random() * 4);
        var directionArray = Object.values(Edirection);
        const randomDirections = directionArray[random]
        handleNextMoviment(randomDirections, positionState)
    }, 2000);
    return {
        position: positionState,
        direction: directionSide,
    }
}
export default useMiniEnemyMoviment;