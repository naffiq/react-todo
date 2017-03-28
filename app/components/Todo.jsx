import moment from 'moment';
import React from 'react';

const Todo = React.createClass({
  render: function () {
    let {id, count, text, completed, createdAt, completedAt} = this.props;

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
          <input type="checkbox" checked={completed} onChange={ () => { this.props.onToggle(id) } } ref="completed"/>
          {count}. {text}
        </label>
        <small>{renderDate()}</small>
      </div>
    );
  }
});

module.exports = Todo;