import { combineReducers } from "redux";
import HangManDuck from "./ducks/HangManDuck";
import TetrisDuck from "./ducks/TetrisDuck";
import UserDuck from "./ducks/UserDuck";

const rootReducer = combineReducers({
  HangManDuck: HangManDuck,
  TetrisDuck: TetrisDuck,
  UserDuck: UserDuck,
});

export default rootReducer;
