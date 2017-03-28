import $ from 'jquery';

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
  }
};

module.exports = TodoAPI;