import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';

import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>

        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="medium-6 large-5 small-11 small-centered column">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
