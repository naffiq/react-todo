import moment from 'moment';

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

// let todoId = 1;
// export const todoReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: todoId++,
//           text: action.text,
//           completed: false,
//           completedAt: undefined,
//           createdAt: moment().unix()
//         }
//       ];
//     case 'TOGGLE_TODO':
//       return state.map((todo) => {
//         return todo.id === action.id ? {
//           ...todo,
//           completed: !todo.completed,
//           completedAt: todo.completed ? undefined : moment().unix()
//         } : todo;
//       });
//   }
//
//   return state;
// };