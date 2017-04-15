import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import TodoAPI from 'TodoAPI';

import router from 'app/router/';

import * as actions from 'actions';
import {configure} from 'configureStore';

const store = configure();

store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setShowCompleted(state.showCompleted);
});


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

const initialShowCompleted = TodoAPI.getShowCompleted();
if (store.getState().showCompleted !== initialShowCompleted) {
  store.dispatch(actions.toggleShowCompleted());
}


$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.getElementById('app')
);
