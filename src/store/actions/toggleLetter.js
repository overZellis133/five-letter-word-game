import {TOGGLE_LETTER} from '../actionTypes';

export const toggleLetter = (letter, player, toggleState) => {
  console.log(`${letter}, ${player}, ${toggleState}`);
  return {
    type: TOGGLE_LETTER,
    letter,
    player,
    toggleState
  };
}
