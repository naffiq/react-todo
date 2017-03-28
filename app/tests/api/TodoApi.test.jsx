import expect from 'expect';
const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  describe('setItems', () => {
    it('should exist', () => {
      expect(TodoAPI).toExist();
    });

    it('should set todos if array is provided', () => {
      let data = [
        {id: 1, text: '1', completed: false}
      ];

      expect(TodoAPI.setTodos(data)).toBe(data);
      let actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(data);
    });

    it('should not set todos if non-array data provided', () => {
      let data = 'invalid data';

      expect(TodoAPI.setTodos(data)).toBeA('undefined');
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getItems', () => {
    it('should return empty array for bad localstorage data', () => {
      let actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localstorage', () => {
      let data = [
        {id: 1, text: '1', completed: false}
      ];
      localStorage.setItem('todos', JSON.stringify(data));

      expect(TodoAPI.getTodos()).toEqual(data);
    });
  });
});