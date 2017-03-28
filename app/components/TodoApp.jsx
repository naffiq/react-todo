import React from 'react';
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';
import uuid from 'node-uuid';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'Feed the cat' },
        { id: uuid(), text: 'Wash the dishes' },
        { id: uuid(), text: 'Cook some meal' },
        { id: uuid(), text: 'Clean the house' },
      ],
    }
  },

  handleAddTodo: function (text) {
    let newTodo = {id: uuid(), text: text};

    this.setState({todos: [...this.state.todos, newTodo]});
  },

  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },

  render: function () {
    let {todos} = this.state;
    return (
      <div>
        <div className="row">
          <div className="medium-8 large-6 small-centered columns">
            <h1>Todo app</h1>

            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
