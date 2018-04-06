import { FETCH_OCCASIONS, SET_SELECTED_OCCASION, SET_SELECTED_FRIEND} from "../actions/types";

const defaultState = { list: [], selectedOccasion: {} };

export default function friends(state = defaultState, action) {
  switch (action.type) {
    case FETCH_OCCASIONS:
      return {
        ...state,
        list: action.payload
      };
    case SET_SELECTED_OCCASION:
      return {
        ...state,
        selectedOccasion: { id: action.payload.id, name: action.payload.name }
      };
    case SET_SELECTED_FRIEND:
      return {
        ...state,
        selectedOccasion: {}
      };
    default:
      return state;
  }
}
