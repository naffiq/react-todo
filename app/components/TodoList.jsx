import React from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;
    let renderTodos = () => {
      return todos.map((todo) => {
        return <Todo { ...todo } key={todo.id}/>
      });
    };

    return (
      <div>
        { renderTodos() }
      </div>
    );
  },
});

module.exports = TodoList;