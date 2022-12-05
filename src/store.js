import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import flightsReducer from './featyres/table/table.reducer';
import thunk from 'redux-thunk';
