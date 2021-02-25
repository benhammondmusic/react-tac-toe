import './TicTacToe.css';
import Space from '../Space/Space';
import React, { useEffect, useState } from 'react';

const TicTacToe = () => {
  const [marks, setMarks] = useState([...Array(9)]);

  const playSpace = (idx, mark) => {
    // console.log(idx, mark);

    marks[idx] = 'x'; // mark;
    const playedSpace = document.querySelector(`#t${idx}`);
    playedSpace.textContent = 'x';

    setMarks(marks);
    console.log(marks);
  };

  //   useEffect(() => {
  //     playSpace();
  //   }, [marks]);

  //   marks[2] = 'x';
  //   marks[0] = 'o';

  return (
    <div className="TicTacToe">
      {marks.map((mark, idx) => {
        return <Space key={idx} playSpace={playSpace} mark={mark} idx={idx} />;
      })}
    </div>
  );
};

export default TicTacToe;
