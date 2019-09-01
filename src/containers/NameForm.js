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
    e.target[0].name === "player1" ?
      this.props.savePlayer1Name(this.state.name) :
      (
        this.props.savePlayer2Name(this.state.name),
        this.props.history.push("/words")
      )
    this.setState({name: ""});
  }

  render() {
    const isPlayer1 = this.props.players.player1.length > 0;
    const isPlayer2 = this.props.players.player2.length > 0;
    return (
      <div>
        <h1>{!isPlayer1 ? "Player 1: " : "Player 2: "}Choose Your Name</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form-inline"
          autoComplete="off">
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            name={isPlayer1 ? "player2" : "player1"}
            onChange={this.handleChange}
            autoFocus
          />
          <button type="submit" className="btn btn-success">
            Choose Name
          </button>
        </form>
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
