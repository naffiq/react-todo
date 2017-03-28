import React from 'react';
import TodoList from 'TodoList';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        { id: 1, text: 'Feed the cat' },
        { id: 2, text: 'Wash the dishes' },
        { id: 3, text: 'Cook some meal' },
        { id: 4, text: 'Clean the house' },
      ]
    }
  },
  render: function () {
    let {todos} = this.state;
    return (
      <div>
        <div className="row">
          <div className="medium-8 large-6 small-centered columns">
            <h1>Todo app</h1>
            <TodoList todos={todos}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
