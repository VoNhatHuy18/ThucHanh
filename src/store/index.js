import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";
import {bikeReducer} from "../reducers/bikeReducer";

const rootReducer = combineReducers({
  bikeStore: bikeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
