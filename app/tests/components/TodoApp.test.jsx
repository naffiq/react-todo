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

  it('should toggle completed value when handleToggle called', () => {
    let todos = [
      {id: 1, text: 'Whatever', completed: false}
    ];
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: todos});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(1);
    expect(todoApp.state.todos[0].completed).toBe(true);

    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt value when handleToggle called on completed = true', () => {
    let todos = [
      {id: 1, text: 'Whatever', completed: true}
    ];
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: todos});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(1);
    expect(todoApp.state.todos[0].completed).toBe(false);

    expect(todoApp.state.todos[0].completedAt).toEqual(false);
  });
});