import {SAVE_PLAYER1_WORD, SAVE_PLAYER2_WORD} from '../actionTypes';

const DEFAULT_STATE = {
  word1: "",
  word2: ""
}

const words = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SAVE_PLAYER1_WORD:
      return {...state, word1: action.word}
    case SAVE_PLAYER2_WORD:
      return {...state, word2: action.word}
    default:
      return state;
  }
}

export default words;
