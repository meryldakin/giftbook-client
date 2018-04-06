import * as apiHelpers from "../api";
import { SET_USER, START_SET_USER, LOGOUT_USER } from "./types";

export function loginUser(user_params) {
  return function(dispatch) {
    dispatch({ type: START_SET_USER });
    apiHelpers.loginUser(user_params).then(data => {
      if (data.error) {
        console.log("Error - bad user!");
      } else {
        localStorage.setItem("token", data["token"]);
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

export function logoutUser() {
  localStorage.clear();
  return {
    type: LOGOUT_USER
  };
}
