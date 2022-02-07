import { useSelector } from "react-redux";
import { hangManSelector } from "../../../../redux/selectors";
import "./game-over.css";
import Restart from "../restart/restart";

export default function GameOver() {
  const { word } = useSelector(hangManSelector);

  return (
    <div>
      <div className="gameOver">Game Over</div>
      <div className="correctWord">
        Correct word was <span style={{ color: "red" }}>{word}</span>.&#128546;
      </div>
      <Restart />
    </div>
  );
}
