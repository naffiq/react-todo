import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {configure} from 'configureStore';
const store = configure();

store.subscribe(() => {
  console.log('new state', store.getState());
});

import TodoApp from 'TodoApp';

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
