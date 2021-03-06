import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import {Todo} from 'Todo';
import * as actions from 'actions';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch START_TOGGLE_TODO action on click', () => {
    let id = 1;
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo text="New todo" id={id} completed={false} dispatch={spy} />);
    TestUtils.Simulate.change(todo.refs.completed);

    expect(spy).toHaveBeenCalledWith(actions.startToggleTodo(id, true));
  });
});