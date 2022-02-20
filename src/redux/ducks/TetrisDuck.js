import {
  createPlayGround,
  getRandomTetromino,
} from "../../components/games/tetris/tetrominoes";

const PLAYGROUND = "tetrisDuck/PLAYGROUND";
const POSITION = "tetrisDuck/POSITION";
const TETROMINO = "tetrisDuck/TETROMINO";
const GAME_OVER = "tetrisDuck/GAME_OVER";
const IS_TETROMINO_MERGED = "tetrisDuck/IS_TETROMINO_MERGED";
const ROWS_CLEARED = "tetrisDuck/ROWS_CLEARED";
const DROP_TIME = "tetrisDuck/DROP_TIME";

const initialState = {
  playGround: createPlayGround(),
  position: { x: 0, y: 0 },
  tetromino: null,
  isTetrominoMerged: false,
  gameOver: false,
  clearedRowsCount: 0,
  interval: 1000,
};

export const playGroundAction = (payload) => ({
  type: PLAYGROUND,
  payload,
});

export const positionAction = (payload) => ({
  type: POSITION,
  payload,
});

export const tetrominoAction = (payload) => ({
  type: TETROMINO,
  payload,
});

export const gameOverAction = (payload) => ({
  type: GAME_OVER,
  payload,
});

export const isTetrominoMergedAction = (payload) => ({
  type: IS_TETROMINO_MERGED,
  payload,
});

export const intervalAction = (payload) => ({
  type: DROP_TIME,
  payload,
});

export const clearedRowsCountAction = (payload) => ({
  type: ROWS_CLEARED,
  payload,
});

const TetrisDuck = (state = initialState, action) => {
  switch (action.type) {
    case PLAYGROUND:
      return {
        ...state,
        playGround: action.payload.playGround,
      };
    case POSITION:
      return {
        ...state,
        position: {
          x: action.payload.position.x,
          y: action.payload.position.y,
        },
      };
    case TETROMINO:
      return {
        ...state,
        tetromino: action.payload.tetromino,
      };
    case GAME_OVER:
      return {
        ...state,
        gameOver: action.payload.gameOver,
      };
    case IS_TETROMINO_MERGED:
      return {
        ...state,
        isTetrominoMerged: action.payload.isTetrominoMerged,
      };
    case ROWS_CLEARED:
      return {
        ...state,
        clearedRowsCount: action.payload.clearedRowsCount,
      };
    case DROP_TIME:
      return {
        ...state,
        interval: action.payload.interval,
      };
    default:
      return state;
  }
};

export default TetrisDuck;
