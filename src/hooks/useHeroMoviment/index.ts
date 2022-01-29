import useEventListener from '@use-it/event-listener'
import React from 'react'
import { CanvasContext } from '../../Context/canvas';
import { Edirection, Ewalker } from '../../Settings/constants'

function useHeroMoviment(initialPosition: any) {
    const canvasContext = React.useContext(CanvasContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useEventListener('keydown', (event: KeyboardEvent) => {
        const directionSide = event.key as Edirection;
        if (directionSide.indexOf('Arrow') === -1) {
            return
        }
        const moviment = canvasContext.updateCanvas(directionSide, positionState, Ewalker.HERO);
        if (moviment.nextMoviment.valid) {
            updatePositionState(moviment.nextPosition);
            updateDirectionState(moviment.directionSide);
        }
        if (moviment.nextMoviment.dead) {
            console.log('MORTO')
        }
    });
    return {
        position: positionState,
        direction: directionSide,
    }
}
export default useHeroMoviment;