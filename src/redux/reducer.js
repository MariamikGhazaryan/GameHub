import {combineReducers} from "redux";
import HangManDuck from "./ducks/HangManDuck";
import NumberPuzzle from "../components/games/numberPuzzle/reducers/reducers";
import TetrisDuck from "./ducks/TetrisDuck";
import UserDuck from "./ducks/UserDuck";

const rootReducer = combineReducers({
    HangManDuck: HangManDuck,
    TetrisDuck: TetrisDuck,
    UserDuck: UserDuck,
    NumberPuzzle: NumberPuzzle,
});

export default rootReducer;
