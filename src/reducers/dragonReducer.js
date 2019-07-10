import { CREATE_DRAGON, SAVE_DRAGON, FETCH_DRAGON_LIST, FETCH_DRAGON } from '../actions/types';

const initialState = {
  dragons: [],
  dragon: {}
}

export default function dragonReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DRAGON:
      return {
        ...state
      };
    case SAVE_DRAGON:
      return {
        ...state
      };
    case FETCH_DRAGON:
      return {
        ...state,
        dragon: action.dragon
      };
    case FETCH_DRAGON_LIST:
      return {
        ...state,
        dragons: action.dragons
      };
    default:
      return state;
  }
}
