import { SET_SELECTED_FRIEND } from "../actions/types";

const defaultState = { list: [] };

export default function friends(state = defaultState, action) {
  switch (action.type) {

    case SET_SELECTED_FRIEND:
      return {
        ...state,
        list: action.payload.gifts
      };
    default:
      return state;
  }
}
