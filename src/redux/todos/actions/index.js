import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODO_COMPLETE,
  TOGGLE_ALL_TODO_UNCOMPLETE,
  CHANGE_TODO_INPUT,
  SET_FILTER,
} from "../types";

export const addTodo = (id, title, completed) => ({
  type: ADD_TODO,
  payload: {
    id,
    title,
    completed,
  }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  }
});

export const deleteAllTodo = id => ({
  type: DELETE_ALL_TODO,
  payload: {
    id,
  }
});

export const updateTodo = (id, title) => ({
  type: UPDATE_TODO,
  payload: {
    id,
    title,
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  }
});

export const toggleAllTodoComplete = () => ({
  type: TOGGLE_ALL_TODO_COMPLETE,
})

export const toggleAllTodoUncomplete = () => ({
  type: TOGGLE_ALL_TODO_UNCOMPLETE,
});

export const changeTodoInput = value => ({
  type: CHANGE_TODO_INPUT,
  payload: {
    value,
  }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter,
  }
});
