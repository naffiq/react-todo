import React from 'react';
import Todo from 'Todo';

const TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container--message">Nothing to do</p>
        );
      }

      return todos.map((todo, i) => {
        return <Todo { ...todo } count={i + 1} key={todo.id} onToggle={this.props.onToggle}/>
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