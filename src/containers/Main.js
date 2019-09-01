import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ChooseWord from './ChooseWord';
import NameForm from './NameForm';
import Turn from './Turn';
import Winner from './Winner';

const Main = props => {
  return (
    <div className="container">
      <Switch>
        <Route
          exact path="/"
          render={() => <Redirect to="/names" />}
        />
        <Route
          exact path="/names"
          render={props => {
            return (
              <NameForm players={props.players} {...props}/>
            );
          }}
        />
        <Route
          exact path="/words"
          render={props => {
            return (
              <ChooseWord
                players={props.players}
                words={props.words}
                {...props}/>
            );
          }}
        />
        <Route
          path="/turn/:player"
          render={props => {
            return (
              <Turn
                players={props.players}
                words={props.words}
                guesses={props.guesses}
                {...props}/>
            );
          }}
        />
        <Route
          exact path="/winner"
          render={props => {
            return (
              <Winner
                {...props}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    players: state.players,
    words: state.words,
    guesses: state.guesses
  };
}

export default withRouter(connect(mapStateToProps)(Main));
