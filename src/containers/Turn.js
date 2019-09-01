import React, { Component } from 'react';
import GuessList from './GuessList';
import GuessForm from './GuessForm';
import { connect } from 'react-redux';
import { Router, withRouter, Route } from 'react-router-dom';
import LetterList from './LetterList';
import FoundLetters from './FoundLetters';

class Turn extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {players} = this.props;
    const allPlayers = Object.values(players);
    let nextPlayer = allPlayers.filter(player => player !== this.props.match.params.player)[0];
    let currentPlayer = this.props.match.params.player;
    return (
      <div>
        <Route
          path="/turn/:player"
          render={props => {
            return (
              <div>
                <h1>{currentPlayer}'s Turn</h1>
                <LetterList
                  currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                  player={Object.keys(players).find(key => players[key] === currentPlayer)}
                  {...props}
                />
                <GuessForm />
                <GuessList
                  name="My"
                  player={Object.keys(players).find(key => players[key] === currentPlayer)}
                  currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                  {...props}
                />
                <GuessList
                  name={`${nextPlayer}'s`}
                  player={Object.keys(players).find(key => players[key] === nextPlayer)}
                  currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                  {...props}
                />
                <FoundLetters
                  currentPlayer={Object.keys(players).find(key => players[key] === currentPlayer)}
                  player={Object.keys(players).find(key => players[key] === currentPlayer)}
                  {...props}
                />
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
