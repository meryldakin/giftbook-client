import { FETCH_FRIENDS, SET_SELECTED_FRIEND } from "../actions/types";

const defaultState = { list: [], selectedFriend: {} };

export default function friends(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        list: action.payload
      };
    case SET_SELECTED_FRIEND:
      return {
        ...state,
        selectedFriend: {
          id: action.payload.id,
          firstName: action.payload.first_name,
          lastName: action.payload.last_name,
          birthday: action.payload.birtday
        }
      };
    default:
      return state;
  }
}
