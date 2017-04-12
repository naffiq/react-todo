import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export const AddTodo = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    let {dispatch} = this.props;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container--footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What are you going to do?"/>

          <button className="button expanded">Add todo</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);