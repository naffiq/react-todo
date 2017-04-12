import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';

import TodoAPI from 'TodoAPI';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: TodoAPI.getShowCompleted(),
      searchText: '',
      todos: TodoAPI.getTodos(),
    }
  },

  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
    TodoAPI.setShowCompleted(this.state.showCompleted);
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  render: function () {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="medium-6 large-5 small-11 small-centered column">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch} showCompleted={showCompleted}/>
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
