import './TicTacToe.css';
import Space from '../Space/Space';
import React, { useEffect, useState } from 'react';

const TicTacToe = () => {
  const [marks, setMarks] = useState([...Array(9)]);
  const [markToPlay, setMarkToPlay] = useState('X');
  let winner = null;

  const checkWinner = (marks) => {
    // console.log('checking winner:', marks);
    // ROWS
    if (marks[0] + marks[1] + marks[2] === 'XXX') return 'X';
    if (marks[3] + marks[4] + marks[5] === 'XXX') return 'X';
    if (marks[6] + marks[7] + marks[8] === 'XXX') return 'X';

    if (marks[0] + marks[1] + marks[2] === 'OOO') return 'O';
    if (marks[3] + marks[4] + marks[5] === 'OOO') return 'O';
    if (marks[6] + marks[7] + marks[8] === 'OOO') return 'O';

    // COLS
    if (marks[0] + marks[3] + marks[6] === 'XXX') return 'X';
    if (marks[1] + marks[4] + marks[7] === 'XXX') return 'X';
    if (marks[2] + marks[5] + marks[8] === 'XXX') return 'X';

    if (marks[0] + marks[3] + marks[6] === 'OOO') return 'O';
    if (marks[1] + marks[4] + marks[7] === 'OOO') return 'O';
    if (marks[2] + marks[5] + marks[8] === 'OOO') return 'O';

    // SLASH
    if (marks[6] + marks[4] + marks[2] === 'XXX') return 'X';
    if (marks[6] + marks[4] + marks[2] === 'OOO') return 'O';

    // BACKSLASH
    if (marks[0] + marks[4] + marks[8] === 'XXX') return 'X';
    if (marks[0] + marks[4] + marks[8] === 'OOO') return 'O';
  };

  const playSpace = (idx) => {
    // console.log(idx, mark);
    if (marks[idx] === undefined) {
      // update array in state
      marks[idx] = markToPlay;
      setMarks(marks);
      winner = checkWinner(marks);

      // switch player if no winner
      winner ? alert('WIN') : setMarkToPlay(markToPlay === 'X' ? 'O' : 'X');
    }
  };

  // update the board display in DOM
  useEffect(() => {
    // const playedSpace = document.querySelector(`#t${idx}`);
    // playedSpace.textContent = markToPlay;

    marks.forEach((mark, idx) => {
      //   console.log(document.querySelector(`#t${idx}`), idx, mark);
      document.querySelector(`#t${idx}`).textContent = mark;
    });
  }, [...marks]);

  return (
    <div className="TicTacToe">
      {marks.map((mark, idx) => {
        return <Space key={idx} playSpace={playSpace} mark={mark} idx={idx} />;
      })}
    </div>
  );
};

export default TicTacToe;
