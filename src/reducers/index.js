import IsLoggedIn from "./IsLoggedIn";
import IsSubscribed from "./IsSubscribed";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  IsLoggedIn: IsLoggedIn,
  IsSubscribed: IsSubscribed,
});

export default allReducers;
