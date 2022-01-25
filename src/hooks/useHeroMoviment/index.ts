import useEventListener from '@use-it/event-listener'
import React from 'react'
import { Edirection, KeyEdirection } from '../../Settings/constants'

function useHeroMoviment(initialPosition: any) {

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === Edirection.LEFT || event.which === KeyEdirection.KeyLeft) {
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState(Edirection.LEFT)
        } else if (event.key === Edirection.RIGHT || event.which === KeyEdirection.KeyRight) {
            const newPosition = {
                x: positionState.x + 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState(Edirection.RIGHT)
        } else if (event.key === Edirection.UP || event.which === KeyEdirection.KeyUp) {
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1
            };
            updatePositionState(newPosition)
        } else if (event.key === Edirection.DOWN || event.which === KeyEdirection.KeyDown) {
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
export default useHeroMoviment;