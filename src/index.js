import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store/configureStore';
import { addTodo, removeTodo } from './actions/todos';
import TodoList from './components/TodoList';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
