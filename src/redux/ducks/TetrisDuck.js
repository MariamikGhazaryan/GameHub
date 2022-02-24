import {createPlayGround} from "../../components/games/tetris/tetrominoes";

const PLAYGROUND = "tetrisDuck/PLAYGROUND";
const POSITION = "tetrisDuck/POSITION";
const TETROMINO = "tetrisDuck/TETROMINO";
const GAME_OVER = "tetrisDuck/GAME_OVER";
const WIN = "tetrisDuck/WIN";
const IS_TETROMINO_MERGED = "tetrisDuck/IS_TETROMINO_MERGED";
const ROWS_CLEARED = "tetrisDuck/ROWS_CLEARED";
const DROP_TIME = "tetrisDuck/DROP_TIME";
const LEVEL = "tetrisDuck/LEVEL";
const SCORE = "tetrisDuck/SCORE";
const UPDATE_ALL = "tetrisDuck/UPDATE_ALL";

const initialState = {
    playGround: createPlayGround(),
    position: {x: 0, y: 0},
    tetromino: null,
    isTetrominoMerged: false,
    gameOver: false,
    win: false,
    clearedRowsCount: 0,
    interval: 1000,
    level: 1,
    score: 0,
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

export const winAction = (payload) => ({
    type: WIN,
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

export const updateAllAction = (payload) => ({
    type: UPDATE_ALL,
    payload,
});

export const levelAction = (payload) => ({
    type: LEVEL,
    payload,
});

export const scoreAction = (payload) => ({
    type: SCORE,
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
        case WIN:
            return {
                ...state,
                win: action.payload.win,
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
        case LEVEL:
            return {
                ...state,
                level: action.payload.level,
            };
        case SCORE:
            return {
                ...state,
                score: action.payload.score,
            };
        case UPDATE_ALL:
            return {
                playGround: action.payload.playGround,
                position: action.payload.position,
                tetromino: action.payload.tetromino,
                isTetrominoMerged: action.payload.isTetrominoMerged,
                gameOver: action.payload.gameOver,
                win: action.payload.win,
                clearedRowsCount: action.payload.clearedRowsCount,
                interval: action.payload.interval,
                level: action.payload.level,
                score: action.payload.score,
            };
        default:
            return state;
    }
};

export default TetrisDuck;
