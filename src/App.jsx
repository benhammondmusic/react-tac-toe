import { useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe/TicTacToe.jsx';

function App() {
  const [message, setMessage] = useState('benhammond.tech');

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
        <a className="App-link" href="https://benhammond.tech">
          {message}
        </a>
      </footer>
    </div>
  );
}

export default App;
