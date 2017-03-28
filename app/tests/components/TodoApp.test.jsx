import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos to state on handleAddTodo', () => {
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    let initCount = todoApp.state.todos.length;

    todoApp.handleAddTodo('My todo');

    expect(todoApp.state.todos.length).toBe(initCount + 1);
  });
});