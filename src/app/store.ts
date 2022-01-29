import { ThunkAction, Action, createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../ducks/test/test'
import dialogHandler from '../ducks/dialog/dialog'
import people from '../ducks/people/people'


export const store = createStore(combineReducers({test: reducer, dialogHandler, people: people}), applyMiddleware(thunk, logger))

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
