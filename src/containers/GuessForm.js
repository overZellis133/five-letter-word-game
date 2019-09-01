import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePlayer1Guess, savePlayer2Guess } from '../store/actions/savePlayerGuess';
import { newGame } from '../store/actions/newGame';

class GuessForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guess: ""
    }
  }

  handleChange = e => {
    this.setState({guess: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    e.target[0].name === this.props.players.player1 ?
      this.props.savePlayer1Guess(this.state.guess, this.checkCorrect(this.state.guess), this.props.players.player1) :
      this.props.savePlayer2Guess(this.state.guess, this.checkCorrect(this.state.guess), this.props.players.player2)
    this.setState({guess: ""});
  }

  checkCorrect = guess => {
    let count = 0;
    let match = false;
    const {players} = this.props;
    const allPlayers = Object.values(this.props.players)
    let nextPlayer = allPlayers.filter(player => player !== this.props.match.params.player)[0];

    if (Object.keys(players).find(key => players[key] === nextPlayer) === "player1") {
      if (guess.toLowerCase() === this.props.words.word1.toLowerCase()) {
        match = true;
      }
      for (let char of guess) {
        if (this.props.words.word1.toLowerCase().includes(char.toLowerCase())) {
          count++
        }
      }
    }

    if (Object.keys(players).find(key => players[key] === nextPlayer) === "player2") {
      if (guess.toLowerCase() === this.props.words.word2.toLowerCase()) {
        match = true;
      }
      for (let char of guess) {
        if (this.props.words.word2.toLowerCase().includes(char.toLowerCase())) {
          count++
        }
      }
    }

    if (match === true) {
      this.props.history.push("/winner");
      return true;
    }
    return count;
  }

  render() {

    const allPlayers = Object.values(this.props.players)
    let nextPlayer = allPlayers.filter(player => player !== this.props.match.params.player)[0];
    return (
      <div className="col-md-6">
        <form
          onSubmit={this.handleSubmit}
          className="form-inline"
          autoComplete="off"
        >
          <input
            type="text"
            className="form-control"
            value={this.state.guess}
            onChange={this.handleChange}
            name={this.props.match.params.player}
            autoFocus
          />
          <button type="submit" className="btn btn-success">
            Guess
          </button>
          <Link to={`/turn/${nextPlayer}`} className="btn btn-danger">
            End Turn
          </Link>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    words: state.words
  }
}

export default withRouter(connect(mapStateToProps, {
  savePlayer1Guess,
  savePlayer2Guess,
  newGame})(GuessForm));
