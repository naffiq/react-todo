import React, {Component} from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';
import AddTodo from 'AddTodo';
import * as actions from 'actions';

export class TodoApp extends Component {
  onLogout = (e) => {
    e.preventDefault();
    let {dispatch} = this.props;

    dispatch(actions.startLogout());
  };

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>

        <h1 className="page-title">Todo app</h1>

        <div className="row">
          <div className="medium-6 large-5 small-11 small-centered column">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redux.connect()(TodoApp);
