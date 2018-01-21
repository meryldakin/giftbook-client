import * as apiHelpers from "../api";
import { SET_USER, START_SET_USER, LOGOUT_USER } from "./types";

export function loginUser(user_params, history) {
  return function(dispatch) {
    dispatch({ type: START_SET_USER });
    apiHelpers.loginUser(user_params, history).then(data => {
      if (data.error) {
        console.log("Error - bad user!");
      } else {
        localStorage.setItem("token", data["token"]);
        history.push("/");
        return dispatch({ type: SET_USER, payload: data });
      }
    });
  };
}

export function getCurrentUser() {
  return function(dispatch) {
    dispatch({ type: START_SET_USER });
    apiHelpers
      .fetchCurrentUser()
      .then(data => dispatch({ type: SET_USER, payload: data }));
  };
}

export function logoutUser(history) {
  localStorage.clear();
  history.push("/login");
  return {
    type: LOGOUT_USER
  };
}
