import "./start-game.css";
import {
  isTetrominoMergedAction,
  intervalAction,
  gameOverAction,
  playGroundAction,
  positionAction,
  tetrominoAction,
} from "../../../../redux/ducks/TetrisDuck";
import { getRandomTetromino, HEIGHT, WIDTH } from "../tetrominoes";
import { useDispatch } from "react-redux";

export default function StartGameButton() {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(
      playGroundAction({
        playGround: Array.from(Array(HEIGHT), () =>
          new Array(WIDTH).fill([0, "clear"])
        ),
      })
    );
    dispatch(
      positionAction({
        position: { x: WIDTH / 2 - 2, y: 0 },
      })
    );

    dispatch(
      tetrominoAction({
        tetromino: getRandomTetromino().matrix,
      })
    );
    dispatch(
      isTetrominoMergedAction({
        isTetrominoMerged: false,
      })
    );

    dispatch(
      intervalAction({
        interval: 1000,
      })
    );

    dispatch(
      gameOverAction({
        gameOver: false,
      })
    );
  };
  return (
    <div className="start-button" onClick={startGame}>
      Start Game
    </div>
  );
}
