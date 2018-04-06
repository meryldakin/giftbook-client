import { combineReducers } from "redux";
import users from "./users";
import friends from "./friends";
import gifts from "./gifts";
import occasions from "./occasions";

export default combineReducers({
  users,
  friends,
  gifts,
  occasions
});
