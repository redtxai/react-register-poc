import { CREATE_DRAGON, FETCH_DRAGON_LIST } from '../actions/types';

export default function dragonReducer(state = [], action) {
  switch (action.type) {
    case CREATE_DRAGON:
      return [...state, action.payload];
      case FETCH_DRAGON_LIST:
      return action.dragons;
    default:
      return state;
  }
}
