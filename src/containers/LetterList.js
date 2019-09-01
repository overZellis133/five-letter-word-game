import React, { Component } from 'react';
import Letter from './Letter';
import { connect } from 'react-redux';

class LetterList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const falseStyle = {
      textDecoration: 'line-through',
      color: 'red'
    }
    const trueStyle = {
      textDecoration: 'underline green',
      color: 'green',
      fontWeight: 'bold'
    }
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
      <ul>
        {letters}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters
  }
}

export default connect(mapStateToProps)(LetterList);
