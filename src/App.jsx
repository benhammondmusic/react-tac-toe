import { useEffect, useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe.jsx';

function App() {
  const [message, setMessage] = useState('');

  const displayWinner = (winner) => {
    setMessage(`${winner} is the winner!`);
  };

  return (
    <div className="App">
      <main className="GameBoard">
        <TicTacToe displayWinner={displayWinner} />
      </main>

      <footer>
        <p>
          Tic-Tac-Toe in that <code>create-react-app</code> style you love to hate.
        </p>
        <p>
          <code>{message}</code>
        </p>
        <a className="App-link" href="https://benhammond.tech">
          benhammond.tech
        </a>
      </footer>
    </div>
  );
}

export default App;
