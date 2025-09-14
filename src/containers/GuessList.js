import React, { Component } from 'react';
import { connect } from 'react-redux';
import Guess from '../components/Guess';

class GuessList extends Component {
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
            guessNumber={i + 1}
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
            guessNumber={i + 1}
          />
        ));
      }
    }
    return (
      <div className="guesses-list">
        {this.props.guesses[`${player}Guesses`].length === 0 ? (
          <div className="empty-state">
            <p style={{color: '#6c757d', fontStyle: 'italic', textAlign: 'center', margin: '20px 0', fontSize: '0.9rem'}}>
              No guesses yet...
            </p>
          </div>
        ) : (
          <div className="guesses-content">
            {playerGuesses()}
          </div>
        )}
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
