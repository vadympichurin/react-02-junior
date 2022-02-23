import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './todos-actions';

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(todo => todo.id !== payload),
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter(todo => todo.id !== payload);

//     case actionTypes.TOGGLE_COMPLETED:
// return state.map(todo =>
//   todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
// );

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const todosReducer = combineReducers({
  items,
  filter,
});

export default todosReducer;
