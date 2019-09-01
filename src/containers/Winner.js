import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newGame } from '../store/actions/newGame';
import Iframe from 'react-iframe';

class Winner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allPlayers = Object.values(this.props.players);
    const loser = allPlayers.filter(player => player !== this.props.winner.name)[0];
    return (
      <div>
        <div className="container">
          <div className="col-md-12">
            <h1>{this.props.winner.name} is the winner!!!</h1>
            <p>{loser}'s word was <strong>{this.props.winner.word}</strong></p>
            <Link
              to="/"
              className="btn btn-success"
              onClick={newGame()}
            >
              New Game
            </Link>
          </div>
          <div className="col-md-6 offset-md-3 desmos">
            <Iframe url="https://www.desmos.com/calculator/dhadmlykah?embed" width="500px" height="500px" styles={{border: "1px solid #ccc"}} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    words: state.words,
    winner: state.winner
  }
}

export default connect(mapStateToProps, {newGame})(Winner);
