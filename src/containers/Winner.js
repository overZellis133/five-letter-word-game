import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { newGame } from '../store/actions/newGame';
import Iframe from 'react-iframe';

class Winner extends Component {
  render() {
    const allPlayers = Object.values(this.props.players);
    const loser = allPlayers.filter(player => player !== this.props.winner.name)[0];
    return (
      <div className="winner-screen">
        <div className="celebration-confetti"></div>
        
        <div className="winner-container">
          <div className="winner-content">
            <div className="trophy-section">
              <div className="trophy-emoji"><span role="img" aria-label="Trophy">🏆</span></div>
              <h1 className="winner-title">
                {this.props.winner.name} Wins!
              </h1>
              <div className="winner-subtitle">
                <span role="img" aria-label="Party popper">🎉</span> Congratulations! <span role="img" aria-label="Party popper">🎉</span>
                <p>You guessed {loser}'s word!</p>
              </div>
            </div>
            <div className="game-summary">
              <div className="summary-card">
                <h3><span role="img" aria-label="Target">🎯</span> Game Summary</h3>
                <div className="summary-details">
                  <div className="detail-item">
                    <span className="detail-label">Winner:</span>
                    <span className="detail-value">{this.props.winner.name}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Secret Word:</span>
                    <span className="detail-value secret-word">{this.props.winner.word}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Player 2:</span>
                    <span className="detail-value">{loser}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="celebration-graph">
            <div className="graph-header">
              <h4><span role="img" aria-label="Confetti ball">🎊</span> Victory Celebration!</h4>
            </div>
            <div className="desmos">
              <Iframe 
                url="https://www.desmos.com/calculator/dhadmlykah?embed" 
                width="100%" 
                height="400px" 
                styles={{
                  border: "none",
                  borderRadius: "15px",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
                }} 
              />
            </div>
          </div>
          <div className="winner-actions">
              <Link
                to="/"
                className="btn btn-primary new-game-btn"
                onClick={newGame()}
              >
                Play Again
              </Link>
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
