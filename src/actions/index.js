import * as apiHelpers from "../api";
import { SET_USER, START_SET_USER, LOGOUT_USER, FETCH_FRIENDS, SET_SELECTED_FRIEND, SAVE_GIFT } from "./types";

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


export function fetchFriends(){
  return function(dispatch){
    apiHelpers
      .fetchFriends()
      .then(data => {
          let friends = data.friends.map(friend => {
            return {
              firstName: friend.first_name,
              lastName: friend.last_name,
              birthday: friend.birthday,
              id: friend.id
            }
          })
          dispatch({
          type: FETCH_FRIENDS,
          payload: friends
        })
    })
  }
}

export function setSelectedFriend(friendId){
  return function(dispatch){
    apiHelpers
      .fetchSelectedFriend(friendId)
      .then(data => {
        dispatch({
          type: SET_SELECTED_FRIEND,
          payload: data
        })
      })
  }
}

export function saveGift(gift){
  return function(dispatch){
    apiHelpers
      .saveGift(gift)
      .then(data => {
        dispatch({
          type: SAVE_GIFT,
          payload: data
        })
      })
  }
}
