import {SAVE_PLAYER1_NAME, SAVE_PLAYER2_NAME} from '../actionTypes';

const DEFAULT_STATE = {
  player1: "",
  player2: ""
}

const players = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SAVE_PLAYER1_NAME:
      return {...state, player1: action.name}
    case SAVE_PLAYER2_NAME:
      return {...state, player2: action.name}
    default:
      return state;
  }
}

export default players;
