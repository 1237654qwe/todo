import { combineReducers } from 'redux';
import todosReducers from "./todos/reducers";

export default () => combineReducers({ todosReducers });