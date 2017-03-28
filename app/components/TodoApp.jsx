import React from 'react';

const TodoApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">
          <div className="medium-8 large-6 small-centered columns">
            <h1>Todo app</h1>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
