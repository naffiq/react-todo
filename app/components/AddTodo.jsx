import React from 'react';

const AddTodo = React.createClass({
  propTypes: {
    onAddTodo: React.PropTypes.func.isRequired
  },

  handleSubmit: function (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What are you going to do?"/>

          <button className="button expanded">Add todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;