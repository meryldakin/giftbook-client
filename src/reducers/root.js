import { combineReducers } from "redux";
import users from "./users";
import friends from "./friends";
import gifts from "./gifts";

export default combineReducers({
  users,
  friends,
  gifts
});
