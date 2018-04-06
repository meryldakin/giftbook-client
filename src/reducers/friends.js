import { FETCH_FRIENDS } from "../actions/types";

const defaultState = { list: [] };

export default function friends(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FRIENDS:
    console.log("fetch friends reducer", action)
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
