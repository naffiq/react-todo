import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export const Todo = React.createClass({
  render: function () {
    let {id, count, text, completed, createdAt, completedAt, dispatch} = this.props;

    let renderDate = () => {
      if (completed) {
        return  'Completed: ' + moment(completedAt, 'X').format('MMMM Do YYYY @ HH:mm')
      }
      return 'Created: ' + moment(createdAt, 'X').format('MMMM Do, YYYY @ HH:mm');
    };

    let todoClassName = completed ? 'todo todo-completed' : 'todo';

    return (
      <div className={todoClassName}>
        <label>
          <input type="checkbox" checked={completed} onChange={ () => { {dispatch(actions.toggleTodo(id))} } } ref="completed"/>
          {count}. {text}
        </label>
        <small>{renderDate()}</small>
      </div>
    );
  }
});

export default connect()(Todo);