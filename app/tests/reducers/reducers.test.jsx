import expect from 'expect';
import df from 'deep-freeze-strict';
import * as reducers from 'reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'search'
      };
      const res = reducers.searchTextReducer('', df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };
      let res = reducers.showCompletedReducer(false, df(action));

      expect(res).toEqual(true);

      res = reducers.showCompletedReducer(true, df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add todo', () => {
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
      let res = reducers.todosReducer(df([]), df(action));

      expect(res[0]).toEqual({
        id: 1,
        text: 'Cut Bridge\'s balls',
        completed: false,
        completedAt: undefined,
        createdAt: 40
      });
    });

    it('should update todo', () => {
      const todos = [
        {
          id: 1,
          text: 'Cut Bridge\'s balls',
          completed: true,
          completedAt: 123,
          createdAt: 40
        }
      ];
      const action = {
        type: 'UPDATE_TODO',
        id: 1,
        updates: {
          completed: false,
          completedAt: null
        }
      };

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(null);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      const todos = [
        {
          id: 1,
          text: 'Cut Bridge\'s balls',
          completed: false,
          completedAt: undefined,
          createdAt: 40
        }
      ];
      const action = {
        type: 'ADD_TODOS',
        todos
      };

      let res = reducers.todosReducer(df([]), df(action));
      expect(res).toEqual(todos);
    })
  });

  describe('authReducer', () => {
    it('should save uid on LOGIN action', () => {
      const action = {
        type: 'LOGIN',
        uid: 123
      };

      const res = reducers.authReducer({}, action);
      expect(res).toEqual({uid: action.uid});
    });

    it('should return empty object on LOGOUT action', () => {
      const action = {
        type: 'LOGOUT'
      };

      const res = reducers.authReducer({uid: 123}, action);
      expect(res).toEqual({});
    });
  });
});