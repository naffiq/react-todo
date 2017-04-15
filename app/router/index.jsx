import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';

import firebase from 'app/firebase/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

const requireGuest = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Login} onEnter={requireGuest} />
      <Route path="todos" component={TodoApp} onEnter={requireLogin} />
    </Route>
  </Router>
);