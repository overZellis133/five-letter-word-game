import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLetter } from '../store/actions/toggleLetter';
import Letter from '../containers/Letter';
import { stateChange } from '../helpers/stateChange';

class Guess extends Component {
  constructor(props) {
    super(props);
  }

  // handleToggle = (letter, currentPlayer, toggleState) => {
  //   this.props.toggleLetter(letter, currentPlayer, toggleState);
  // }

  render() {
    const { letters, guess, player, currentPlayer, toggleLetter } = this.props;
    const word = player === currentPlayer ? (guess.guess.split("").map((char, i) => (
      <Letter
        char={char}
        toggleState={toggleLetter.bind(this, char, currentPlayer, stateChange(letters[char.toLowerCase()][currentPlayer].currentState))}
        key={i}
        player={player}
        currentPlayer={currentPlayer}
        currentState={letters[char.toLowerCase()][currentPlayer].currentState}
      />
    ))) :
    (guess.guess.split("").map((char, i) => (
      <Letter
        char={char}
        // toggleState={toggleLetter.bind(this, char, currentPlayer, stateChange(letters[char.toLowerCase()][currentPlayer].currentState))}
        key={i}
        player={player}
        currentPlayer={currentPlayer}
        currentState={letters[char.toLowerCase()][player].currentState}
      />
    )))
    return (
      <li>
        {word} - {guess.score}
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters
  }
}

export default connect(mapStateToProps, { toggleLetter })(Guess);
