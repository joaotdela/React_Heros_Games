import useEventListener from '@use-it/event-listener'
import React from 'react'

function useHeroMoviment(initialPosition: any) {

    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [directionSide, updateDirectionState] = React.useState('RIGHT');
    useEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft' || event.which === 65) {
            const newPosition = {
                x: positionState.x - 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState('LEFT')
        } else if (event.key === 'ArrowRight' || event.which === 68) {
            const newPosition = {
                x: positionState.x + 1,
                y: positionState.y,
            };
            updatePositionState(newPosition)
            updateDirectionState('RIGHT')
        } else if (event.key === 'ArrowUp' || event.which === 87) {
            const newPosition = {
                x: positionState.x,
                y: positionState.y + 1
            };
            updatePositionState(newPosition)
        } else if (event.key === 'ArrowDown' || event.which === 83) {
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