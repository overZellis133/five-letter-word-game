import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLetter } from '../store/actions/toggleLetter';
import Letter from '../containers/Letter';
import { stateChange } from '../helpers/stateChange';

class Guess extends Component {

  // handleToggle = (letter, currentPlayer, toggleState) => {
  //   this.props.toggleLetter(letter, currentPlayer, toggleState);
  // }

  render() {
    const { letters, guess, player, currentPlayer, toggleLetter, guessNumber } = this.props;
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
      <div className="guess-item-wrapper">
        <div className="guess-number">
          {guessNumber}
        </div>
        <div className="guess-list-item">
          <div className="guess-word-letters">
            {word}
          </div>
          <div className="guess-score">
            {guess.score === true ? '🎉 WIN!' : guess.score}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters
  }
}

export default connect(mapStateToProps, { toggleLetter })(Guess);
