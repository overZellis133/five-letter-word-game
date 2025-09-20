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
      <div className="winner-screen mega-celebration">
        {/* Enhanced Confetti and Background Effects */}
        <div className="celebration-confetti"></div>
        <div className="falling-confetti"></div>
        <div className="celebration-sparkles"></div>
        
        {/* MASSIVE Floating Winner Names */}
        <div className="floating-names">
          <div className="floating-name floating-name-1">{this.props.winner.name}</div>
          <div className="floating-name floating-name-2">{this.props.winner.name}</div>
          <div className="floating-name floating-name-3">{this.props.winner.name}</div>
          <div className="floating-name floating-name-4">{this.props.winner.name}</div>
          <div className="floating-name floating-name-5">{this.props.winner.name}</div>
          <div className="floating-name floating-name-6">{this.props.winner.name}</div>
          <div className="floating-name floating-name-7">{this.props.winner.name}</div>
          <div className="floating-name floating-name-8">{this.props.winner.name}</div>
          <div className="floating-name floating-name-9">{this.props.winner.name}</div>
          <div className="floating-name floating-name-10">{this.props.winner.name}</div>
        </div>
        
        {/* GIANT Background Names */}
        <div className="giant-names">
          <div className="giant-name giant-name-1">{this.props.winner.name}</div>
          <div className="giant-name giant-name-2">{this.props.winner.name}</div>
          <div className="giant-name giant-name-3">{this.props.winner.name}</div>
          <div className="giant-name giant-name-4">{this.props.winner.name}</div>
        </div>
        
        {/* Champion Background Text */}
        <div className="champion-bg-text">
          <div className="champion-text champion-text-1">CHAMPION</div>
          <div className="champion-text champion-text-2">WINNER</div>
          <div className="champion-text champion-text-3">VICTORY</div>
        </div>
        
        <div className="winner-container">
          <div className="winner-content">
            <div className="trophy-section mega-trophy">
              <div className="trophy-glow"></div>
              <div className="trophy-emoji bouncing"><span role="img" aria-label="Trophy">🏆</span></div>
              <div className="celebration-emojis">
                <span className="celebration-emoji celebration-emoji-1" role="img" aria-label="Star">⭐</span>
                <span className="celebration-emoji celebration-emoji-2" role="img" aria-label="Fire">🔥</span>
                <span className="celebration-emoji celebration-emoji-3" role="img" aria-label="Crown">👑</span>
                <span className="celebration-emoji celebration-emoji-4" role="img" aria-label="Sparkles">✨</span>
              </div>
              <h1 className="winner-title mega-title">
                <span className="winner-name-animated">{this.props.winner.name}</span>
                <span className="wins-text">Wins!</span>
              </h1>
              <div className="winner-subtitle celebration-subtitle">
                <p>You guessed {loser}'s word!</p>
              </div>
            </div>
            <div className="game-summary celebration-summary">
              <div className="summary-card glowing-card">
                <h3><span role="img" aria-label="Target">🎯</span> Victory Summary</h3>
                <div className="summary-details">
                  <div className="detail-item champion-detail">
                    <span className="detail-label">🏆 Champion:</span>
                    <span className="detail-value winner-highlight">{this.props.winner.name}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">🎯 Conquered Word:</span>
                    <span className="detail-value secret-word glowing-word">{this.props.winner.word}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">⚔️ Defeated:</span>
                    <span className="detail-value">{loser}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="celebration-graph mega-celebration-graph">
            <div className="graph-header">
              <h4><span role="img" aria-label="Confetti ball">🎊</span> Epic Victory Celebration! <span role="img" aria-label="Confetti ball">🎊</span></h4>
            </div>
            <div className="desmos celebration-frame">
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
          <div className="winner-actions celebration-actions">
              <Link
                to="/"
                className="btn btn-primary new-game-btn celebration-btn"
                onClick={newGame()}
              >
                <span role="img" aria-label="Rocket">🚀</span> Play Again <span role="img" aria-label="Rocket">🚀</span>
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
