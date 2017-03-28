import React from 'react';

const Todo = React.createClass({

  render: function () {
    let {count, text} = this.props;
    return (
      <div>
        {count}. {text}
      </div>
    );
  }
});

module.exports = Todo;