import './TicTacToe.css';
import Space from '../Space/Space';
const TicTacToe = () => {
  const spaces = [...Array(9)];

  spaces[2] = 'x';
  spaces[0] = 'o';

  return (
    <div className="TicTacToe">
      {spaces.map((space, idx) => {
        return <Space mark={spaces[idx]} />;
      })}
    </div>
  );
};

export default TicTacToe;
