import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import TodoAPI from 'TodoAPI';
import TodoApp from 'TodoApp';

import * as actions from 'actions';
import {configure} from 'configureStore';
const store = configure();

store.subscribe(() => {
  const state = store.getState();

  TodoAPI.setTodos(state.todos);
  TodoAPI.setShowCompleted(state.showCompleted);
});

const initialShowCompleted = TodoAPI.getShowCompleted();
const initialTodos = TodoAPI.getTodos();

if (store.getState().showCompleted !== initialShowCompleted) {
  store.dispatch(actions.toggleShowCompleted());
}

store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
