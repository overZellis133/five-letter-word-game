import {SAVE_PLAYER1_GUESS, SAVE_PLAYER2_GUESS, WINNER} from '../actionTypes';

export const savePlayer1Guess = (guess, score, winner) => {
  if (score === true) {
    return {
      type: WINNER,
      winner,
      guess
    }
  }
  return {
    type: SAVE_PLAYER1_GUESS,
    guess,
    score
  };
}

export const savePlayer2Guess = (guess, score, winner) => {
  if (score === true) {
    return {
      type: WINNER,
      winner,
      guess
    }
  }
  return {
    type: SAVE_PLAYER2_GUESS,
    guess,
    score
  };
}
