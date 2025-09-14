import React, { Component } from 'react';
import GuessList from './GuessList';
import GuessForm from './GuessForm';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import LetterList from './LetterList';
import FoundLetters from './FoundLetters';

class Turn extends Component {

  render() {
    const {players} = this.props;
    const allPlayers = Object.values(players);
    let nextPlayer = allPlayers.filter(player => player !== this.props.match.params.player)[0];
    let currentPlayer = this.props.match.params.player;
    return (
      <div className="game-container">
        <Route
          path="/turn/:player"
          render={props => {
            return (
              <div className="game-interface">
                {/* Compact Header - Top Left */}
                <div className="compact-header">
                  <span className="player-vs">{players.player1} vs {players.player2}</span>
                  <span className="current-turn">{currentPlayer}'s Turn</span>
                </div>

                {/* Alphabet Section */}
                <div className="alphabet-section">
                  <LetterList
                    currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                    player={Object.keys(players).find(key => players[key] === currentPlayer)}
                    {...props}
                  />
                </div>

                {/* Discovered Letters */}
                <div className="discovered-section">
                  <h4 className="discovered-title">
                    <span role="img" aria-label="Target">🎯</span> Discovered Letters
                  </h4>
                  <FoundLetters
                    currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                    player={Object.keys(players).find(key => players[key] === currentPlayer)}
                    {...props}
                  />
                </div>

                {/* Main Game Layout */}
                <div className="main-game-layout">
                  {/* Guess Input - Narrow */}
                  <div className="guess-input-section">
                    <div className="section-card guess-section">
                      <h3 className="section-title"><span role="img" aria-label="Pencil">✏️</span> Make Your Guess</h3>
                      <GuessForm />
                    </div>
                  </div>

                  {/* Guesses Columns */}
                  <div className="guesses-columns">
                    <div className="guess-column">
                      <h3 className="column-title"><span role="img" aria-label="Memo">📝</span> My Guesses</h3>
                      <GuessList
                        name="My"
                        player={Object.keys(players).find(key => players[key] === currentPlayer)}
                        currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                        {...props}
                      />
                    </div>

                    <div className="guess-column">
                      <h3 className="column-title"><span role="img" aria-label="Eyes">👀</span> {nextPlayer}'s Guesses</h3>
                      <GuessList
                        name={`${nextPlayer}'s`}
                        player={Object.keys(players).find(key => players[key] === nextPlayer)}
                        currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                        {...props}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    guesses: state.guesses
  }
}

export default withRouter(connect(mapStateToProps)(Turn));
