import React, { Component } from 'react';
import { connect } from 'react-redux';

class Letter extends Component {

// props -- char, toggleState
  render() {
    const { char, currentPlayer, currentState, player } = this.props;
    
    let letterClass = 'letter-item';
    if (currentState === true) {
      letterClass += ' correct';
    } else if (currentState === false) {
      letterClass += ' incorrect';
    }
    
    return (
      player === currentPlayer ?
      (<span
        className={letterClass}
        onClick={this.props.toggleState}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            this.props.toggleState();
          }
        }}
        style={{cursor: this.props.toggleState ? 'pointer' : 'default'}}
      >
        {char.toUpperCase()}
      </span>) :
      (<span
        className={letterClass}
        style={{cursor: 'default'}}
      >
        {char.toUpperCase()}
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
