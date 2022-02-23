const GUESSED_LETTERS = "hangmanDuck/GUESSED_LETTERS";
const WRONG_LETTERS = "hangmanDuck/WRONG_LETTERS";
const WORD = "hangmanDuck/WORD";
const RESTART = "hangmanDuck/RESTART";

const initialState = {
    guessedLetters: [],
    wrongLetters: [],
    word: "",
    restart: false,
};

export const guessedLettersAction = (payload) => ({
    type: GUESSED_LETTERS,
    payload,
});

export const wrongLettersAction = (payload) => ({
    type: WRONG_LETTERS,
    payload,
});

export const wordAction = (payload) => ({
    type: WORD,
    payload,
});

export const restartAction = (payload) => ({
    type: RESTART,
    payload,
});

const HangManDuck = (state = initialState, action) => {
    switch (action.type) {
        case GUESSED_LETTERS:
            return {
                ...state,
                guessedLetters: action.payload.guessedLetters,
            };
        case WRONG_LETTERS:
            return {
                ...state,
                wrongLetters: action.payload.wrongLetters,
            };
        case WORD:
            return {
                ...state,
                word: action.payload.word,
            };
        case RESTART:
            return {
                ...state,
                restart: action.payload.restart,
            };
        default:
            return state;
    }
};

export default HangManDuck;
