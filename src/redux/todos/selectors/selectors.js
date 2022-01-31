import { createSelector } from 'reselect';

export const getTodosByFilter = ({ todosReducers: { todos, filterType } }) => {
  switch (filterType) {
    case "all": {
      return todos
    }

    case "active": {
      return todos.filter((item) => !item.completed)
    }

    case "completed": {
      return todos.filter((item) => item.completed)
    }
  }
}

export const getTodosSelector = createSelector(getTodosByFilter, todos => todos);