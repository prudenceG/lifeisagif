import { combineReducers } from "redux";
import gifsReducer from "./gifsReducer";

const rootReducer = combineReducers({
  gifs : gifsReducer,
});

export default rootReducer;