import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';

export const TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container--message">Nothing to do</p>
        );
      }

      return todos.map((todo, i) => {
        return <Todo { ...todo } count={i + 1} key={todo.id} />
      });
    };

    return (
      <div>
        { renderTodos() }
      </div>
    );
  },
});

export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);