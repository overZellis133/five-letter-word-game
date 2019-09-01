import React, { Component } from 'react';
import { connect } from 'react-redux';
import Letter from './Letter';

class FoundLetters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentPlayer, player } = this.props;
    const alphabet = Object.keys(this.props.letters);
    const trueLetters = alphabet.filter(letter => this.props.letters[letter][currentPlayer].currentState === true)
      .map(found => (
        <Letter
          char={found}
          key={found}
          currentPlayer={currentPlayer}
          player={player}
          currentState={true}
        />
      ));
    return (
      <div className="col-md-3">
        <h1>Identified Letters</h1>
        <ul>{trueLetters}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters
  };
}

export default connect(mapStateToProps)(FoundLetters);
