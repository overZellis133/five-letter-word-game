import React, { Component } from 'react';
import { connect } from 'react-redux';
import Guess from '../components/Guess';

class GuessList extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const {player, currentPlayer} = this.props;
    let playerGuesses = () => {
      if (player === "player1") {
        return this.props.guesses.player1Guesses.map((guess, i) => (
          <Guess
            key={i}
            guess={guess}
            player={player}
            currentPlayer={currentPlayer}
          />
        ));
      }
      if (player === "player2") {
        return this.props.guesses.player2Guesses.map((guess, i) => (
          <Guess
            key={i}
            guess={guess}
            player={player}
            currentPlayer={currentPlayer}
          />
        ));
      }
    }
    return (
      <div className="col-md-3 guess-list">
        <h1>{this.props.name} Guesses</h1>
        <ul>
          {playerGuesses()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    words: state.words,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(GuessList);
