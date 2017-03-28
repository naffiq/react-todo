import expect from 'expect';
const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
    localStorage.removeItem('showCompleted');
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

  describe('filterTodos', () => {
    let data = [
      {id: 1, text: 'Text 1', completed: true},
      {id: 2, text: 'Cool 12', completed: false},
      {id: 3, text: 'Text 123', completed: true},
    ];

    it('should return all items if showCompleted is true', () => {
      let filteredTodos = TodoAPI.filterTodos(data, true, '');
      expect(filteredTodos.length).toEqual(3);
    });

    it('should return one iteme if showCompleted is false', () => {
      let filteredTodos = TodoAPI.filterTodos(data, false, '');
      expect(filteredTodos.length).toEqual(1);
    });

    it('should filter items by search text', () => {
      let filteredTodos = TodoAPI.filterTodos(data, true, '1');
      expect(filteredTodos.length).toEqual(3);
      filteredTodos = TodoAPI.filterTodos(data, true, '2');
      expect(filteredTodos.length).toEqual(2);
      filteredTodos = TodoAPI.filterTodos(data, true, '3');
      expect(filteredTodos.length).toEqual(1);
    });

    it('should filter items by lowercase search text', () => {
      let filteredTodos = TodoAPI.filterTodos(data, true, 'text');
      expect(filteredTodos.length).toEqual(2);
    });

    it('should return all items if no search text provided', () => {
      let filteredTodos = TodoAPI.filterTodos(data, true, '');
      expect(filteredTodos.length).toEqual(3);
    });

    it('should sort items by completed state', () => {
      let filteredTodos = TodoAPI.filterTodos(data, true, '');

      let sortedData = [
        {id: 2, text: 'Cool 12', completed: false},
        {id: 1, text: 'Text 1', completed: true},
        {id: 3, text: 'Text 123', completed: true},
      ];

      expect(filteredTodos).toEqual(sortedData);
    });
  });

  describe('getShowCompleted', () => {
    it('should return false if no data was set previously', () => {
      let showCompleted = TodoAPI.getShowCompleted();
      expect(showCompleted).toEqual(false);
    });

    it('should return true if it was set previously', () => {
      localStorage.setItem('showCompleted', true);
      let showCompleted = TodoAPI.getShowCompleted();
      expect(showCompleted).toEqual(true);
    });
  });

  describe('setShowCompleted', () => {
    it('should save show completed to local storage', () => {
      let showCompleted = TodoAPI.setShowCompleted(true);
      expect(localStorage.getItem('showCompleted')).toEqual('true');
    });

    it('should return value passed to it', () => {
      let showCompleted = TodoAPI.setShowCompleted(false);
      expect(showCompleted).toEqual(false);
    });

    it('should not return anything when non-boolean value passed', () => {
      expect(TodoAPI.setShowCompleted('wrong data')).toBeA('undefined');
    });
  });
});