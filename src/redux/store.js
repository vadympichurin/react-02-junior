import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';
import todosReducer from './todos/todos-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
