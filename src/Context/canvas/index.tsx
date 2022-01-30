import React from 'react'
import { canvas, ECanvas } from './helper';
import { checkValidMoviment, handleNextMoviment } from '../../Context/canvas/helper';
interface IProps {
    children: React.ReactNode
}

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, position, walker) => null
});


function CanvasProvider(props: IProps) {
    const [canvasState, updateCanvasState] = React.useState({
        canvas: canvas,
        updateCanvas: (direction, currentPosition, walker) => {
            const nextPosition = handleNextMoviment(direction, currentPosition);
            const nextMoviment = checkValidMoviment(nextPosition, walker);


            if (nextMoviment.valid) {
                updateCanvasState((prevState) => {
                    const newCanvas = Object.assign([], prevState.canvas);
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x]

                    newCanvas[currentPosition.y][currentPosition.x] = ECanvas.Floor;
                    newCanvas[nextPosition.y][nextPosition.x] = currentValue;
                    return {
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas,
                    }
                });
            }



            return {
                nextPosition,
                nextMoviment
            }
        }
    });
    return (
        < CanvasContext.Provider value={canvasState} >
            {props.children}
        </CanvasContext.Provider >
    )
}

export default CanvasProvider;
