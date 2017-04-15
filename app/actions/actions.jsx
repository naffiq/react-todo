import firebase, {firebaseRef, twitterProvider} from 'app/firebase/';
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

    var uid = getState().auth.uid;
    const todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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

export const startAddTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const todosRef = firebaseRef.child(`users/${uid}/todos`);

    return todosRef.once('value').then((snapshot) => {
      const snapshotValue = snapshot.val() || {};

      const todos = Object.keys(snapshotValue).map((id) => {
        let todo = snapshotValue[id];
        return {
          id,
          ...todo
        };
      }) || [];

      dispatch(addTodos(todos));
    });
  };
};

export const testAction = () => {
  return (dispatch, getState) => {
    dispatch({type: 'TEST'});
  };
};

export const startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    const uid = getState().auth.uid;
    const todosRef = firebaseRef.child(`users/${uid}/todos`);
    const todoRef = firebaseRef.child(`users/${uid}/todos/${id}`).update(updates);

    return todoRef.then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

export const startLogin = () => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(twitterProvider).then((result) => {
      console.log('Auth worked!', result);
      dispatch(login(result.user.uid));
    }).catch((error) => {
      console.log('Auth failed', error);
    });
  };
};

export const startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logout');
      dispatch('logout');
    });
  };
};

export const login = (uid) => {
  return {
    type: 'LOGIN',
    uid
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
};