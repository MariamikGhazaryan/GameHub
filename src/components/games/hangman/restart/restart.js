import "./restart.css";
import restartImg from "../images/restart.png";
import {
  restartAction,
  wrongLettersAction,
} from "../../../../redux/ducks/HangManDuck";
import { useDispatch, useSelector } from "react-redux";
import { hangManSelector } from "../../../../redux/selectors";

export default function Restart() {
  const dispatch = useDispatch();
  const { restart } = useSelector(hangManSelector);

  const handleRestartClick = () => {
    dispatch(
      restartAction({
        restart: !restart,
      })
    );
    dispatch(
      wrongLettersAction({
        wrongLetters: [],
      })
    );
  };
  return (
    <div className="restart">
      Dou you want to restart?{" "}
      <img
        className="restartImage"
        src={restartImg}
        onClick={handleRestartClick}
      />
    </div>
  );
}
