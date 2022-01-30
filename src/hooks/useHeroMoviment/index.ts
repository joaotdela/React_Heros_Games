import useEventListener from '@use-it/event-listener'
import React from 'react'
import { CanvasContext } from '../../Context/canvas';
import { ChestContext } from '../../Context/chest';
import { Edirection, Ewalker } from '../../Settings/constants';


function useHeroMoviment(initialPosition: any) {
    const canvasContext = React.useContext(CanvasContext);
    const chestsContext = React.useContext(ChestContext);
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState(Edirection.RIGHT);
    useEventListener('keydown', (event: KeyboardEvent) => {
        const directionSide = event.key as Edirection;
        if (directionSide.indexOf('Arrow') === -1) {
            return;
        }
        const moviment = canvasContext.updateCanvas(directionSide, positionState, Ewalker.HERO);
        if (moviment.nextMoviment.valid) {
            updatePositionState(moviment.nextPosition);
            updateDirectionState(moviment.directionSide);
        }
        if (moviment.nextMoviment.dead) {
            console.log('MORTO')
        }
        if (moviment.nextMoviment.chest) {
            chestsContext.updateOpenedChests(moviment.nextPosition);
        }
        if (chestsContext.totalChests === chestsContext.openedChests.total && moviment.nextMoviment.door) {
            
        }
    });
    return {
        position: positionState,
        direction: directionSide,
    }
}
export default useHeroMoviment;