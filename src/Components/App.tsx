import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import { game_size } from '../Settings/constants'
function App() {
  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: game_size,
          height: game_size,
        }}>
        <Board />
      </div>
    </div>
  );
}

export default App;
