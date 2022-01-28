import useEventListener from '@use-it/event-listener'
import React from 'react'
import { checkValidMoviment, handleNextMoviment } from '../../Context/canvas/helper';
import { Edirection, KeyEdirection } from '../../Settings/constants'

function useHeroMoviment(initialPosition: any) {

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useEventListener('keydown', (event: KeyboardEvent) => {
        const directionSide = event.key as Edirection;
        if (directionSide.indexOf('Arrow') === -1) {
            return
        }
        const nextPosition = handleNextMoviment(directionSide, positionState);
        const isValidMoviment = checkValidMoviment(nextPosition);
        if (isValidMoviment) {
            updatePositionState(nextPosition);
            updateDirectionState(directionSide);
        }

    });
    return {
        position: positionState,
        direction: directionSide,
    }
}
export default useHeroMoviment;