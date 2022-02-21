import PlayGround from "./playground/playGround";
import StartGameButton from "./start-game/start-game";
import "./tetris.css";
import { useDispatch, useSelector } from "react-redux";
import { tetrisSelector } from "../../../redux/selectors";
import {
  isTetrominoMergedAction,
  intervalAction,
  gameOverAction,
  playGroundAction,
  positionAction,
  clearedRowsCountAction,
  tetrominoAction,
} from "../../../redux/ducks/TetrisDuck";
import {
  isMoveInCorrect,
  createPlayGround,
  getRandomTetromino,
  WIDTH,
} from "./tetrominoes";
import { useEffect } from "react";
import { useInterval } from "./hooks/useInterval";
import Level from "./level/level";
import Score from "./score/score";
import GameOver from "./game-over/game-over";

export default function Tetris() {
  const {
    gameOver,
    position,
    playGround,
    tetromino,
    isTetrominoMerged,
    clearedRowsCount,
    interval,
  } = useSelector(tetrisSelector);
  const dispatch = useDispatch();

  useInterval(() => {
    moveDown();
  }, interval);

  useEffect(() => {
    return () => {
      dispatch(
        playGroundAction({
          playGround: createPlayGround(),
        })
      );
      dispatch(
        positionAction({
          position: { x: 0, y: 0 },
        })
      );
      dispatch(
        tetrominoAction({
          tetromino: null,
        })
      );
      dispatch(
        isTetrominoMergedAction({
          isTetrominoMerged: false,
        })
      );
      dispatch(
        gameOverAction({
          gameOver: false,
        })
      );

      dispatch(
        clearedRowsCountAction({
          clearedRowsCount: 0,
        })
      );
      dispatch(
        intervalAction({
          interval: 1000,
        })
      );
    };
  }, []);

  useEffect(() => {
    let newPlayGround = playGround.map((row) =>
      row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
    );
    tetromino?.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0 && (position.x || position.y)) {
          newPlayGround[y + position.y][x + position.x] = [
            value,
            `${isTetrominoMerged ? "merged" : "clear"}`,
          ];
        }
      });
    });
    if (isTetrominoMerged) {
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
      newPlayGround = clearMergedRows(newPlayGround);
    }

    dispatch(
      playGroundAction({
        playGround: newPlayGround,
      })
    );
  }, [isTetrominoMerged, position.x, position.y, tetromino]);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        //arrow left
        moveToLeftOrRight(-1);
      } else if (keyCode === 39) {
        //arrow right
        moveToLeftOrRight(1);
      } else if (keyCode === 40) {
        //arrow down
        moveDown();
      } else if (keyCode === 38) {
        //arrow up
        rotateTetromino(playGround, 1);
      }
    }
  };
  const moveToLeftOrRight = (dir) => {
    const move = { x: dir, y: 0 };
    if (!isMoveInCorrect(tetromino, position, playGround, move)) {
      dispatch(
        positionAction({
          position: { x: position.x + dir, y: position.y + 0 },
        })
      );
    }
  };

  const moveDown = () => {
    const move = { x: 0, y: 1 };

    if (!isMoveInCorrect(tetromino, position, playGround, move)) {
      dispatch(
        positionAction({
          position: { x: position.x + 0, y: position.y + 1 },
        })
      );
      dispatch(
        isTetrominoMergedAction({
          isTetrominoMerged: false,
        })
      );
    } else {
      if (position.y < 1) {
        dispatch(
          gameOverAction({
            gameOver: true,
          })
        );
        dispatch(
          intervalAction({
            interval: null,
          })
        );
      }
      dispatch(
        positionAction({
          position: { x: position.x + 0, y: position.y + 0 },
        })
      );
      dispatch(
        isTetrominoMergedAction({
          isTetrominoMerged: true,
        })
      );
    }
  };

  const clearMergedRows = (playGround) =>
    playGround.reduce((acc, row) => {
      if (row.every((cell) => cell[0] !== 0)) {
        dispatch(
          clearedRowsCountAction({
            clearedRowsCount: clearedRowsCount + 1,
          })
        );
        acc.unshift(new Array(playGround[0].length).fill([0, "clear"]));
        return acc;
      }
      acc.push(row);
      return acc;
    }, []);

  const rotateMatrix = (matrix) => {
    return matrix[0].map((val, index) =>
      matrix.map((row) => row[index]).reverse()
    );
  };

  const rotateTetromino = (p, dir) => {
    let clonedTetromino = JSON.parse(JSON.stringify(tetromino));
    dispatch(
      tetrominoAction({
        tetromino: rotateMatrix(clonedTetromino),
      })
    );
  };

  return (
    <div>
      <h1>Tetris</h1>
      <div
        className="container-tetris"
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
      >
        <PlayGround />
        <aside>
          <Level />
          <Score />
          <StartGameButton />
          {gameOver && <GameOver />}
        </aside>
      </div>
    </div>
  );
}
