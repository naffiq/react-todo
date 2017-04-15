import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import TodoAPI from 'TodoAPI';

import router from 'app/router/';

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
    { router }
  </Provider>,
  document.getElementById('app')
);
