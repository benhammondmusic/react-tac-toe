import './Space.css';
const Space = ({ playSpace, idx }) => {
  return <button key={idx} id={`t${idx}`} onClick={() => playSpace(idx)} className="Space"></button>;
};
export default Space;
