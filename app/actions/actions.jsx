import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    const todo = {
      text,
      completed: false,
      completedAt: null,
      createdAt: moment().unix()
    };

    const todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      let newTodo = todo;
      newTodo.id = todoRef.key;

      dispatch(addTodo(newTodo))
    });
  };
};

export const updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
};

export const toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export const addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  }
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    const todoRef = firebaseRef.child(`todos/${id}`).update(updates);

    return todoRef.then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};