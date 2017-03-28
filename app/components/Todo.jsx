import moment from 'moment';
import React from 'react';

const Todo = React.createClass({
  render: function () {
    let {id, count, text, completed, createdAt, completedAt} = this.props;

    let renderDate = () => {
      let createdFormatted = 'Created: ' + moment(createdAt, 'X').format('MMMM Do, YYYY @ HH:mm');
      let completedFormatted = '';
      if (completed) {
        completedFormatted = ' | Completed: ' + moment(completedAt, 'X').format('MMMM Do YYYY @ HH:mm')
      }
      return createdFormatted + completedFormatted;
    };

    return (
      <div >
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