import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import {Provider} from 'react-redux';

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {configure} from 'configureStore';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    let todos = [
      { id: 1, text: 'Feed the cat', completed: false, completedAt: undefined, createdAt: 123 },
      { id: 2, text: 'Wash the dishes', completed: false, completedAt: undefined, createdAt: 123 }
    ];

    const store = configure({
      todos: todos
    });
    const provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTodoList/></Provider>);
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    let todos = [];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    let $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container--message').length).toEqual(1);
  });
});