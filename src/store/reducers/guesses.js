import {SAVE_PLAYER1_GUESS, SAVE_PLAYER2_GUESS} from '../actionTypes';

const DEFAULT_STATE = {
  player1Guesses: [],
  player2Guesses: []
}

const guesses = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SAVE_PLAYER1_GUESS:
      return {...state, player1Guesses: [...state.player1Guesses, {guess: action.guess, score: action.score}]}
    case SAVE_PLAYER2_GUESS:
      return {...state, player2Guesses: [...state.player2Guesses, {guess: action.guess, score: action.score}]}
    default:
      return state;
  }
}

export default guesses;
