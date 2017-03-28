import React from 'react';

const Todo = React.createClass({
  render: function () {
    let {id, count, text, completed} = this.props;
    return (
      <div >
        <label>
          <input type="checkbox" checked={completed} onChange={ () => { this.props.onToggle(id) } } ref="completed"/>
          {count}. {text}
        </label>
      </div>
    );
  }
});

module.exports = Todo;