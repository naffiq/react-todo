import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 1,
        text: 'Cut Bridge\'s balls',
        completed: false,
        completedAt: undefined,
        createdAt: 40
      }
    };
    const res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should creat todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});

    const todoText = 'Foo bar';
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({type: 'ADD_TODO'});
      expect(actions[0].todo).toInclude({text: todoText});

      done();
    }).catch(done);
  });

  it('should generate add todos action object', () => {
    const todos = [{
      id: 1,
      text: 'Go!',
      completed: false,
      completedAt: undefined,
      createdAt: 123
    }];

    const action = {
      type: 'ADD_TODOS',
      todos
    };
    const res = actions.addTodos(todos);

    expect(res).toEqual(action);

  });

  it('should generate toggle todo completed action', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });
});