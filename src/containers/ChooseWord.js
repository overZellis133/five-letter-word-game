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
    e.target[0].name === "word1" ?
      this.props.savePlayer1Word(this.state.word) :
        (
          this.props.savePlayer2Word(this.state.word),
          this.props.history.push(`/turn/${this.props.players.player1}`)
        )
    this.setState({word: ""});
  }

  render() {
    const { player1, player2 } = this.props.players;
    const isWord1 = this.props.words.word1.length > 0;
    const isWord2 = this.props.words.word2.length > 0;
    return(
      <div>
        <h1 style={{marginBottom: "100px"}}>{`${player1} vs ${player2}`}</h1>
        <h1>{!isWord1 ? `${player1}` : `${player2}`}, choose your 5-letter word</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form-inline"
          autoComplete="off">
          <input
            type="text"
            className="form-control"
            value={this.state.word}
            name={isWord1 ? "word2" : "word1"}
            onChange={this.handleChange}
            autoFocus
          />
          <button type="submit" className="btn btn-success">
            Choose Secret Word
          </button>
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

export default connect(mapStateToProps, { savePlayer1Word, savePlayer2Word })(ChooseWord);
