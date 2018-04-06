import { combineReducers } from "redux";
import users from "./users";
import friends from "./friends";

export default combineReducers({
  users,
  friends
});
