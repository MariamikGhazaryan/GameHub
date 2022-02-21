import "./start-game.css";
import { updateAllAction } from "../../../../redux/ducks/TetrisDuck";
import { createPlayGround, getRandomTetromino, WIDTH } from "../tetrominoes";
import { useDispatch } from "react-redux";

export default function StartGameButton() {
  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(
      updateAllAction({
        playGround: createPlayGround(),
        position: { x: WIDTH / 2 - 2, y: 0 },
        tetromino: getRandomTetromino().matrix,
        isTetrominoMerged: false,
        gameOver: false,
        win: false,
        clearedRowsCount: 0,
        interval: 1000,
        level: 1,
        score: 0,
      })
    );
  };
  return (
    <div className="start-button" onClick={startGame}>
      Start Game
    </div>
  );
}
