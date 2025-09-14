import React, { Component } from 'react';
import { savePlayer1Name, savePlayer2Name} from '../store/actions/savePlayerName';
import { connect } from 'react-redux';

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    }
  }

  handleChange = e => {
    this.setState({name: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    
    // Validate name input
    if (this.state.name.trim().length === 0) {
      alert('Please enter your name!');
      return;
    }
    
    if (e.target[0].name === "player1") {
      this.props.savePlayer1Name(this.state.name);
    } else {
      this.props.savePlayer2Name(this.state.name);
      this.props.history.push("/words");
    }
    this.setState({name: ""});
  }

  render() {
    const isPlayer1 = this.props.players.player1.length > 0;
    return (
      <div className="name-form-container">
        <div className="welcome-header">
          <h1>
            Five Letter Word Game
          </h1>
        </div>
        
        <div className="player-setup">
          <div className="player-indicator">
            <span className="player-badge">
              {!isPlayer1 ? "Player 1" : "Player 2"}
            </span>
          </div>
          
          <h2 className="name-prompt">
            {!isPlayer1 ? "Enter your name to get started!" : "Player 2, it's your turn!"}
          </h2>
          
          <form
            onSubmit={this.handleSubmit}
            className="form-inline name-form"
            autoComplete="off">
            <div className="input-group">
              <input
                type="text"
                className="form-control name-input"
                value={this.state.name}
                name={isPlayer1 ? "player2" : "player1"}
                onChange={this.handleChange}
                placeholder="Enter your name..."
                autoFocus
                maxLength="20"
              />
              <button type="submit" className="btn btn-success name-submit-btn">
                {!isPlayer1 ? "Confirm" : "Confirm"}
              </button>
            </div>
          </form>
          
          {isPlayer1 && (
            <div className="player-list">
              <p className="players-so-far">
                <strong>Player 1:</strong> {this.props.players.player1}
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
    players: state.players
  }
}

export default connect(mapStateToProps, { savePlayer1Name, savePlayer2Name })(NameForm);
