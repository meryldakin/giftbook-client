import * as apiHelpers from "../api";
import { SET_USER, START_SET_USER, LOGOUT_USER, FETCH_FRIENDS } from "./types";

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


export function fetchFriends(){
  return function(dispatch){
    apiHelpers
      .fetchFriends()
      .then(data => {
          let friends = data.friends.map(friend => {
            return {
              firstName: friend.first_name,
              lastName: friend.last_name,
              birthday: friend.birthday
            }
          })
          dispatch({
          type: FETCH_FRIENDS,
          payload: friends
        })
    })
  }
}
