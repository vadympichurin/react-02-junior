import { combineReducers } from 'redux';
import * as actionTypes from './counter-types';

const value = (state = 0, { type, payload }) => {
  switch (type) {
    case actionTypes.INCREMENT:
      return state + payload;

    case actionTypes.DECREMENT:
      return state - payload;

    default:
      return state;
  }
};

const step = (state = 5, action) => state;

const counterReducer = combineReducers({
  value,
  step,
});

export default counterReducer;
