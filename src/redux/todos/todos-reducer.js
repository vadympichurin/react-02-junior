import { combineReducers } from 'redux';
import * as actionTypes from './todos-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(todo => todo.id !== payload);

    case actionTypes.TOGGLE_COMPLETED:
      return state.map(todo =>
        todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
      );

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const todosReducer = combineReducers({
  items,
  filter,
});

export default todosReducer;
