import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import TodoAPI from 'TodoAPI';
import TodoApp from 'TodoApp';
import Login from 'Login';

import * as actions from 'actions';
import {configure} from 'configureStore';
const store = configure();

store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setShowCompleted(state.showCompleted);
});

const initialShowCompleted = TodoAPI.getShowCompleted();
if (store.getState().showCompleted !== initialShowCompleted) {
  store.dispatch(actions.toggleShowCompleted());
}

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Login} />
        <Route path="todo" component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
