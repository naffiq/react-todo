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

    it('should toggle todo', () => {
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
        type: 'TOGGLE_TODO',
        id: 1
      };

      let res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toNotEqual(undefined);
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
});