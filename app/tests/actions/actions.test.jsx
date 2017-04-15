import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase/';
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

  it('should create todo and dispatch ADD_TODO', (done) => {
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

  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {
        completed: false,
        completedAt: null
      }
    };

    const res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;
    const todo = {
      text: 'TodoTests with firebase',
      completed: false,
      createdAt: 123456,
    };

    beforeEach((done) => {
      const todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        testTodoRef.set(todo).then(() => done());
      }).catch(done);

    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done()).catch(done);
    });

    it('should dispatch startAddTodos action and have todo', (done) => {
      const store = createMockStore({});
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0]).toEqual(todo);

        done();
      }).catch(done);
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});

      const action = actions.startToggleTodo(testTodoRef.key, true);
      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });

        expect(mockActions[0].updates).toInclude({
          completed: true
        });

        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }).catch(done);
    });
  })
});