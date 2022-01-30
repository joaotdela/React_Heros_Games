import React from 'react';
import CanvasProvider from '../Context/canvas';
import ChestProvider from '../Context/chest';

import Debugger from '../Debugger';
import Board from './Board';

function Game() {
    return (
        <CanvasProvider>
            <ChestProvider>
                <Debugger />
                <Board />
            </ChestProvider>
        </CanvasProvider>
    )
}

export default Game;