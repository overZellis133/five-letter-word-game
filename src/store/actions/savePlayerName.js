import {SAVE_PLAYER1_NAME, SAVE_PLAYER2_NAME} from '../actionTypes';

export const savePlayer1Name = name => {
  return {
    type: SAVE_PLAYER1_NAME,
    name
  };
}

export const savePlayer2Name = name => {
  return {
    type: SAVE_PLAYER2_NAME,
    name
  };
}
