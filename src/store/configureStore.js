import { createStore, combineReducers } from 'redux'
import todoReducer from '../reducers/todos';
import filterReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      todos: todoReducer,
      filters: filterReducer
    })
  )
  return store;
}