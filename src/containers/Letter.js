import React, { Component } from 'react';
import {stateChange} from '../helpers/stateChange';
import { connect } from 'react-redux';

class Letter extends Component {
  constructor(props) {
    super(props);
  }

// props -- char, toggleState
  render() {
    const { char, currentPlayer, currentState, player } = this.props;
    const falseStyle = {
      textDecoration: 'line-through',
      color: 'red'
    }
    const trueStyle = {
      textDecoration: 'underline green',
      color: 'green',
      fontWeight: 'bold'
    }
    return (
      player === currentPlayer ?
      (<span
        onClick={this.props.toggleState}
        style={currentState === false ? falseStyle : currentState === true ? trueStyle : null}
      >
        {`${char} `}
      </span>) :
      (<span
        // onClick={toggleState}
        // style={currentState === false ? falseStyle : currentState === true ? trueStyle : null}
      >
        {`${char} `}
      </span>)
    )
  }
}

function mapStateToProps(state) {
  return {
    letters: state.letters,
    players: state.players
  }
}

export default connect(mapStateToProps)(Letter);
