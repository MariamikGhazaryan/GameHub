import { combineReducers } from "redux";
import HangManDuck from "./ducks/HangManDuck";
import NumberPuzzle from "../components/games/numberPuzzle/reducers/reducers";

const rootReducer = combineReducers({
  HangManDuck: HangManDuck,
  NumberPuzzle: NumberPuzzle,
});

export default rootReducer;
