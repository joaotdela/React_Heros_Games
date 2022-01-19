import React from 'react'
import Hero from '../Hero';
import { game_size } from '../../Settings/constants';

const Board = () => {
  return (
    <div>
      <Hero />
      <img src='./assests/tileset.gif' alt='' width={game_size} height={game_size} />

    </div>
  );
}

export default Board;