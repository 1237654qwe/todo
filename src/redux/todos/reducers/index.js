import {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL_TODO_COMPLETE,
  TOGGLE_ALL_TODO_UNCOMPLETE,
  SET_FILTER,
  CHANGE_TODO_INPUT,
} from "../types"

const INITIAL_STATE = {
  todo: "",
  todos: [],
  filterType: "all"
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: payload.id, title: payload.title, completed: false }]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id)
      }

    case DELETE_ALL_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed !== true)
      }


    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, title: payload.title }
          }
          return todo
        })
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo
        })
      }

    case TOGGLE_ALL_TODO_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return { ...todo, completed: true }
        }
        )
      }

    case TOGGLE_ALL_TODO_UNCOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return { ...todo, completed: false }
        }
        )
      }

    case CHANGE_TODO_INPUT:
      return {
        ...state,
        todo: payload.value,
      }

    case SET_FILTER:
      return {
        ...state,
        filterType: payload.filter,
      }

    default:
      return state
  }
}

