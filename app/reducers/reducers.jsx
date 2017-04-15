import moment from 'moment';
import uuid from 'uuid';

export const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
  }

  return state;
};


export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
  }

  return state;
};

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.todo
      ];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          const newCompleted = !todo.completed;
          return {
            ...todo,
            ...action.updates
          };
        }
        return todo;
      });

    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
  }
  return state;
};