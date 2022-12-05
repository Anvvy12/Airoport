import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import flightsReducer from './featyres/table/table.reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({ flights: flightsReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
