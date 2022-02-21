import { combineReducers } from "redux";
import HangManDuck from "./ducks/HangManDuck";
import TetrisDuck from "./ducks/TetrisDuck";

const rootReducer = combineReducers({
  HangManDuck: HangManDuck,
  TetrisDuck: TetrisDuck,
});

export default rootReducer;
