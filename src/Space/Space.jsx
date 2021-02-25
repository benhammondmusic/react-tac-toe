import './Space.css';
const Space = ({ mark, playSpace, idx }) => {
  return <button key={idx} id={`t${idx}`} onClick={() => playSpace(idx, mark)} className="Space"></button>;
};
export default Space;
