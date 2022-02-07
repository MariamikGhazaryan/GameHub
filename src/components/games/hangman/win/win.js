import "./win.css";
import winner from "../images/winner.png";
import Restart from "../restart/restart";

export default function Win() {
  return (
    <div>
      <img className="winnerImage" src={winner} />
      <Restart />
    </div>
  );
}
