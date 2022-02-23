import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './counter-actions';

const value = createReducer(0, {
  [actions.increment]: (state, { payload }) => state + payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

const step = (state = 5, action) => state;

const counterReducer = combineReducers({
  value,
  step,
});

export default counterReducer;
