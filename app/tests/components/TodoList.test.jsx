import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render on Todo component for each todo item', () => {
    let todos = [
      { id: 1, text: 'Feed the cat' },
      { id: 2, text: 'Wash the dishes' }
    ];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
});