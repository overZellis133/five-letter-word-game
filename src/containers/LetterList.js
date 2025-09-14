import React, { Component } from 'react';
import Letter from './Letter';
import { connect } from 'react-redux';

class LetterList extends Component {
  render() {
    const { currentPlayer, player } = this.props;
    const alphabet = Object.keys(this.props.letters);
    const letters = alphabet.map(letter => (
      <Letter
        char={letter.toUpperCase()}
        key={letter}
        currentPlayer={currentPlayer}
        player={player}
        currentState={this.props.letters[letter.toLowerCase()][currentPlayer].currentState}
        // toggleState={null}
      />
    ));
    return (
      <div className="letter-list-container">
        {letters}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters
  }
}

export default connect(mapStateToProps)(LetterList);
