import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT when entered input', () => {
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'New todo item!'
    };
    todoSearch.refs.searchText.value = action.searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    let spy = expect.createSpy();
    let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(todoSearch));

    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});