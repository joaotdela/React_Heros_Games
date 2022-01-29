
import './App.css';
import { game_size } from '../Settings/constants';
import Game from './Game';
function App() {
  return (
    <div className="App">
      <div
        style={{
          position: 'relative',
          width: game_size,
          height: game_size,
        }}>
        <Game />
      </div>
    </div >
  );
}

export default App;
