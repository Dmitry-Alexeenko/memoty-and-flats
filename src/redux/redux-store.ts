import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import gameReducer from './reducers/game-reducer';
import flatsReducer from './reducers/flats-reducer';

let reducers = combineReducers({ gameReducer, flatsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;