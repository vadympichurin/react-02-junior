import { createAction } from '@reduxjs/toolkit';
import shortId from 'shortid';

export const changeFilter = createAction('todos/changeFilter');
export const toggleCompleted = createAction('todos/toggleCompleted');
export const deleteTodo = createAction('todos/delete');
export const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
}));

// export const addTodo = text => ({
//   type: actionTypes.ADD,
//   payload: {
// id: shortId.generate(),
// text,
// completed: false,
//   },
// });

// export const deleteTodo = todoId => ({
//   type: actionTypes.DELETE,
//   payload: todoId,
// });

// export const toggleCompleted = todoId => ({
//   type: actionTypes.TOGGLE_COMPLETED,
//   payload: todoId,
// });

// export const changeFilter = value => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: value,
// });
