import { combineReducers } from "redux";
import HangManDuck from "./ducks/HangManDuck";

const rootReducer = combineReducers({
  HangManDuck: HangManDuck,
});

export default rootReducer;
