import useEventListener from '@use-it/event-listener'
import React from 'react'
import { Edirection } from '../../Settings/constants'

function useEnemyMoviment(initialPosition: any) {

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useEventListener('keydown', (event: KeyboardEvent) => {

        if (event.key === Edirection.LEFT || event.which === Edirection.KeyLeft) {
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState(Edirection.LEFT)
        } else if (event.key === Edirection.RIGHT || event.which === Edirection.KeyRight) {
            const newPosition = {
                x: positionState.x + 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState(Edirection.RIGHT)
        } else if (event.key === Edirection.UP || event.which === Edirection.KeyUp) {
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1
            };
            updatePositionState(newPosition)
        } else if (event.key === Edirection.DOWN || event.which === Edirection.KeyDown) {
            const newPosition = {
                x: positionState.x,
                y: positionState.y - 1
            };
            updatePositionState(newPosition)
        }


    });
    return {
        position: positionState,
        direction: directionSide,
    }
}
export default useEnemyMoviment;