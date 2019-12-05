import {Client} from 'boardgame.io/react';
import Board from './components/Board';
import Game from './components/Game';

const App = Client({
    game: Game,
    board: Board,
});

export default App;