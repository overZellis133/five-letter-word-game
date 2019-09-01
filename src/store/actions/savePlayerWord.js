import {SAVE_PLAYER1_WORD, SAVE_PLAYER2_WORD} from '../actionTypes';

export const savePlayer1Word = word => {
  return {
    type: SAVE_PLAYER1_WORD,
    word
  };
}

export const savePlayer2Word = word => {
  return {
    type: SAVE_PLAYER2_WORD,
    word
  };
}
