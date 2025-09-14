import React, {Component} from 'react';
import { connect } from 'react-redux';
import { savePlayer1Word, savePlayer2Word} from '../store/actions/savePlayerWord';

class ChooseWord extends Component {
  constructor(props) {
    super(props);

    this.state= {
      word: ""
    }
  }

  handleChange = e => {
    this.setState({word: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();
    
    // Validate word length and characters
    const word = this.state.word.trim();
    if (word.length !== 5) {
      alert('Please enter exactly 5 letters!');
      return;
    }
    
    if (!/^[A-Za-z]+$/.test(word)) {
      alert('Please use only letters (no numbers or symbols)!');
      return;
    }
    
    if (e.target[0].name === "word1") {
      this.props.savePlayer1Word(word.toUpperCase());
    } else {
      this.props.savePlayer2Word(word.toUpperCase());
      this.props.history.push(`/turn/${this.props.players.player1}`);
    }
    this.setState({word: ""});
  }

  render() {
    const { player1, player2 } = this.props.players;
    const isWord1 = this.props.words.word1.length > 0;
    const currentPlayer = !isWord1 ? player1 : player2;
    
    return(
      <div className="word-selection-container">
        <div className="vs-header">
          <h1> {player1} vs {player2}</h1>
          <p style={{margin: 0, fontSize: '1.1rem', opacity: 0.9}}>
            Battle of Minds • Five Letter Words
          </p>
        </div>
        
        <div className="word-prompt">
          <div className="current-player-indicator">
            <span className="player-badge">
              {currentPlayer}'s Turn
            </span>
          </div>
          
          <h2 style={{color: '#2c3e50', marginBottom: '30px'}}>
            <span role="img" aria-label="Shushing face">🤫</span> Choose your secret 5-letter word
          </h2>
          <form
            onSubmit={this.handleSubmit}
            className="form-inline word-form"
            autoComplete="off">
            <div className="input-group">
              <input
                type="text"
                className="form-control word-input"
                value={this.state.word}
                name={isWord1 ? "word2" : "word1"}
                onChange={this.handleChange}
                placeholder="ENTER"
                autoFocus
                maxLength="5"
                pattern="[A-Za-z]{5}"
                title="Please enter exactly 5 letters"
              />
              <button type="submit" className="btn word-submit-btn">
                <span role="img" aria-label="Target">🎯</span> Lock in Word
              </button>
            </div>
            
            <div className="word-requirements">
              <p style={{color: '#6c757d', fontSize: '0.9rem', margin: '15px 0 0 0'}}>
                <span role="img" aria-label="Memo">📝</span> Must be exactly 5 letters • No repeating letters
              </p>
            </div>
          </form>
          
          {isWord1 && (
            <div className="progress-indicator">
              <div style={{
                background: '#e9ecef', 
                borderRadius: '10px', 
                height: '6px', 
                marginTop: '30px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  width: '50%',
                  height: '100%',
                  borderRadius: '10px',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
              <p style={{color: '#667eea', fontSize: '0.9rem', margin: '10px 0 0 0'}}>
                <span role="img" aria-label="Check mark">✅</span> {player1} has chosen their word
              </p>
            </div>
          )}
        </div>
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

export default connect(mapStateToProps, { savePlayer1Word, savePlayer2Word })(ChooseWord);
