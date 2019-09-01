import { combineReducers } from 'redux';
import players from './players';
import words from './words';
import guesses from './guesses';
import winner from './winner';
import letters from './letters';
import {NEW_GAME} from '../actionTypes';

const appReducer = combineReducers({
  players,
  words,
  guesses,
  winner,
  letters
});

const rootReducer = (state, action) => {
  if (action.type === NEW_GAME) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;
