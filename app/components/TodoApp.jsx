import React from 'react';
import uuid from 'node-uuid';

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

  handleAddTodo: function (text) {
    let newTodo = {id: uuid(), text: text, completed: false};

    this.setState({todos: [...this.state.todos, newTodo]});
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  handleToggle: function (id) {
    this.setState({todos: this.state.todos.map((todo) => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  },

  render: function () {
    let {todos, showCompleted, searchText} = this.state;
    let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div className="row">
          <div className="medium-8 large-6 small-centered columns">
            <h1>Todo app</h1>

            <TodoSearch onSearch={this.handleSearch} showCompleted={showCompleted}/>
            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
