import React from 'react'
import Hero from '../Hero';
import { game_size } from '../../Settings/constants';
import MiniDemon from '../Mini_Demon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';

const Board = () => {
  return (
    <div>
      <Demon />
      <MiniDemon />
      <Hero />]
      <Trap />
      <Chest />
      <img src='./assests/tileset.gif' alt='' width={game_size} height={game_size} />

    </div>
  );
}

export default Board;