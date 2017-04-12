import React from 'react';
import {connect} from 'react-redux';
import TodoAPI from 'TodoAPI';
import Todo from 'Todo';

export const TodoList = React.createClass({
  render: function () {
    let {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container--message">Nothing to do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo, i) => {
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
  (state) => (state)
)(TodoList);