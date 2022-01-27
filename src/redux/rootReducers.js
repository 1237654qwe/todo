import todosReducers from "./todos/reducers"
import { combineReducers } from 'redux';

export default () => combineReducers({ todosReducers })