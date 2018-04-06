import { SET_USER, START_SET_USER, LOGOUT_USER } from "../actions/types";

const defaultState = { current_user: null, loading: false, loggedIn: false };

export default function users(state = defaultState, action) {
  switch (action.type) {
    case START_SET_USER:
      return {
        ...state,
        loading: true
      };
    case SET_USER:
      return {
        ...state,
        current_user: action.payload,
        loading: false,
        loggedIn: true
      };
    case LOGOUT_USER:
      return {
        ...state,
        current_user: null,
        loggedIn: false,
        loading: false
      };

    default:
      return state;
  }
}
