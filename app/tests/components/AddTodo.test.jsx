import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO if text is provided', () => {
    let spy = expect.createSpy();

    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    const text = 'New todo item!';
    addTodo.refs.todoText.value = text;
    const action = {
      type: 'ADD_TODO',
      text
    };
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO if text is not provided', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

  it('should clear input after submitting', () => {
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    const text = 'Whatever';
    addTodo.refs.todoText.value = text;
    const action = {
      type: 'ADD_TODO',
      text
    };
    addTodo.refs.todoText.value = text;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
    expect(addTodo.refs.todoText.value).toBe('');
  });
});