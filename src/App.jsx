import { useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe.jsx';

function App() {
  const [message, setMessage] = useState('Tic-Tac-Toe in that create-react-app style you love to hate.');

  const displayWinner = (winner) => {
    setMessage(`${winner} is the winner!`);
  };

  return (
    <div className="App">
      <main className="GameBoard">
        <TicTacToe displayWinner={displayWinner} />
      </main>

      <footer>
        <p>{message}</p>

        <a className="App-link" href="https://benhammond.tech">
          benhammond.tech
        </a>
      </footer>
    </div>
  );
}

export default App;
