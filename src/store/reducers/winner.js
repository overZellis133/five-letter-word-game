import {WINNER} from '../actionTypes';

const DEFAULT_STATE = {
  winner: "",
  word: ""
}

const winner = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case WINNER:
      return {name: action.winner, word: action.guess}
    default:
      return state;
  }
}

export default winner;
