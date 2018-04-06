import { SET_SELECTED_FRIEND, SAVE_GIFT } from "../actions/types";

const defaultState = { list: [] };

export default function friends(state = defaultState, action) {
  switch (action.type) {

    case SET_SELECTED_FRIEND:
      return {
        ...state,
        list: action.payload.gifts
      };
    case SAVE_GIFT:
      console.log(action.payload)
      const giftList = [...state.list]
      const filteredGifts = giftList.filter(gift => gift.id !== action.payload.id)
      return {
        ...state,
        list: [...filteredGifts,
              action.payload]
      };
    default:
      return state;
  }
}
