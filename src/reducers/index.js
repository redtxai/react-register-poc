import { combineReducers } from 'redux';
import dragons from './dragonReducer';

export default combineReducers({
  dragons: dragons
});
