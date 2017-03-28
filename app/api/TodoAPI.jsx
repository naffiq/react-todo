import $ from 'jquery';

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

const TodoAPI = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },

  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) { }

    return $.isArray(todos) ? todos : [];
  },

  filterTodos: function (todos, showCompleted, searchText) {
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return showCompleted || !todo.completed;
    });

    filteredTodos = filteredTodos.filter((todo) => {
      return !searchText.length || todo.text.toLowerCase().includes(searchText)
    });

    filteredTodos =filteredTodos.sort((todoA, todoB) => {
      if (todoA.completed && !todoB.completed) {
        return 1;
      } else if (!todoA.completed && todoB.completed) {
        return -1;
      }

      return 0;
    });

    return filteredTodos;
  },

  getShowCompleted: function () {
    let showCompleted = localStorage.getItem('showCompleted');
    if (showCompleted == 'true' || showCompleted == 'false') {
      return showCompleted == 'true';
    }
    return false;
  },

  setShowCompleted: function (showCompleted) {
    if (typeof showCompleted === 'boolean') {
      localStorage.setItem('showCompleted', showCompleted);
      return this.getShowCompleted();
    }
  }
};

module.exports = TodoAPI;