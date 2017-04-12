import {combineReducers, createStore, compose} from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export const configure = () => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  return createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
};