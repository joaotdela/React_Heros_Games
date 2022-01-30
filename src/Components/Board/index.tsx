import React from 'react'
import Hero from '../Hero';
import { game_size } from '../../Settings/constants';
import MiniDemon from '../Mini_Demon';
import Demon from '../Demon';
import Chest from '../Chest';
import Trap from '../Trap';
import { canvas, ECanvas } from '../../Context/canvas/helper';
import { ChestContext } from '../../Context/chest';

function getCanvasMap() {
  const array = [];
  for (let y = 0; y < canvas.length; y++) {
    const canvasY = canvas[y];

    for (let x = 0; x < canvasY.length; x++) {
      const canvasYX = canvasY[x];

      const position = { x: x, y: y };
      const text = canvasYX || canvas[y][x];
      const key = `${x}-${y}`;
      if (text === ECanvas.Hero) {
        array.push(<Hero key={key} initialPosition={position} />)
      }
      if (text === ECanvas.MiniDemon) {
        array.push(<MiniDemon key={key} initialPosition={position} />)
      }
      if (text === ECanvas.Demon) {
        array.push(<Demon key={key} initialPosition={position} />)
      }
      if (text === ECanvas.Trap) {
        array.push(<Trap key={key} initialPosition={position} />)
      }
      if (text === ECanvas.Chest) {
        array.push(<Chest key={key} initialPosition={position} />)
      }
      //tilesArray.push(<Tile key={key} position={position} text={text} />);
    }
  }
  return array;
}
const elements = getCanvasMap();
export function renderOpenDoor() {
  return (
    <img src='./assests/DOOR-OPEN.png' alt='' style={{
      position: 'absolute',
      top: 0,
      left: 578,
    }} />
  )
}
const Board = () => {
  const chestsContext = React.useContext(ChestContext);
  return (
    <div>

      {elements}
      {chestsContext.totalChests === chestsContext.openedChests.total && (
        renderOpenDoor()
        )}
      <img src='./assests/tileset.gif' alt='' width={game_size} height={game_size} />

    </div >
  );
}

export default Board;