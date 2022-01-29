import React from 'react';
import CanvasProvider from '../Context/canvas';
import Debugger from '../Debugger';
import Board from './Board';

function Game() {
    return (
        <CanvasProvider>
            <Debugger />
            <Board />
        </CanvasProvider>
    )
}

export default Game;