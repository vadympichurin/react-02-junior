import shortId from 'shortid';
import * as actionTypes from './todos-types';

export const addTodo = text => ({
  type: actionTypes.ADD,
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
});

export const deleteTodo = todoId => ({
  type: actionTypes.DELETE,
  payload: todoId,
});

export const toggleCompleted = todoId => ({
  type: actionTypes.TOGGLE_COMPLETED,
  payload: todoId,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
