import {TOGGLE_LETTER} from '../actionTypes';

const DEFAULT_STATE = {
  a: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  b: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  c: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  d: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  e: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  f: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  g: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  h: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  i: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  j: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  k: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  l: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  m: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  n: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  o: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  p: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  q: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  r: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  s: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  t: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  u: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  v: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  w: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  x: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  y: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  },
  z: {
    player1: {currentState: ""},
    player2: {currentState: ""}
  }
}

// const stateChange = mark => {
//   switch (mark) {
//     case "":
//       return false;
//     case false:
//       return true;
//     case true:
//       return "";
//     default:
//       return mark;
//   }
// }

// state[action.letter][action.player].currentState
// state.a.player1.currentState
const letters = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_LETTER:
      return {
        ...state,
          [action.letter]: {
            ...state[action.letter],
            [action.player]: {
              ...state[action.letter][action.player],
              currentState: action.toggleState
            }
          }
        };
    default:
      return state;
  }
}

export default letters;
