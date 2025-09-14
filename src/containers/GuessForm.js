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

  handleFormSubmit = e => {
    e.preventDefault();
    
    // Validate guess length and characters
    const guess = this.state.guess.trim();
    if (guess.length !== 5) {
      alert('Please enter exactly 5 letters!');
      return;
    }
    
    if (!/^[A-Za-z]+$/.test(guess)) {
      alert('Please use only letters (no numbers or symbols)!');
      return;
    }
    
    this.handleSubmit(e);
  }

  render() {
    const allPlayers = Object.values(this.props.players)
    let nextPlayer = allPlayers.filter(player => player !== this.props.match.params.player)[0];
    return (
      <div className="guess-form-container">
        <form
          onSubmit={this.handleFormSubmit}
          className="guess-form"
          autoComplete="off"
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control guess-input"
              value={this.state.guess}
              onChange={this.handleChange}
              name={this.props.match.params.player}
              placeholder="GUESS"
              autoFocus
              maxLength="5"
              style={{textTransform: 'uppercase'}}
            />
            
            <div className="button-group">
              <button type="submit" className="btn guess-btn guess-btn-primary">
                <span role="img" aria-label="Target">🎯</span> Make Guess
              </button>
              <Link to={`/turn/${nextPlayer}`} className="btn guess-btn guess-btn-secondary">
                <span role="img" aria-label="Refresh">🔄</span> End Turn
              </Link>
            </div>
          </div>
          
          <div className="guess-hint">
            <p style={{
              color: '#6c757d', 
              fontSize: '0.9rem', 
              margin: '10px 0 0 0',
              textAlign: 'center'
            }}>
              <span role="img" aria-label="Lightbulb">💡</span> Enter a 5-letter word to guess your opponent's secret word
            </p>
          </div>
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
