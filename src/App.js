import React from 'react'
import { Header } from './components/header/Header'
import { TodoForm } from './components/todoForm/TodoForm'
import {
  addTodo,
  deleteTodo,
  deleteAllTodo,
  updateTodo,
  toggleTodo,
  toggleAllTodoComplete,
  toggleAllTodoUncomplete,
  changeTodoInput,
  setFilter
} from "./redux/todos/actions"
import { getTodosSelector } from "./redux/todos/selectors/selectors"
import { connect } from 'react-redux'
import './App.css'

const App = ({
  todo,
  todos,
  addTask,
  deletTask,
  deletAllTask,
  updateTask,
  toggleTask,
  toggleAllTaskComplete,
  toggleAllTaskUncomplete,
  setTodo,
  setTodos,
  filter,
  filterType,
}) => {

  return (
    <div className='container'>
      <div className='container__header'>
        <Header />
      </div>
      <div className='container__todo'>
        <TodoForm
          todo={todo}
          todos={todos}
          addTask={addTask}
          deletTask={deletTask}
          deletAllTask={deletAllTask}
          updateTask={updateTask}
          toggleTask={toggleTask}
          toggleAllTaskComplete={toggleAllTaskComplete}
          toggleAllTaskUncomplete={toggleAllTaskUncomplete}
          setTodo={setTodo}
          setTodos={setTodos}
          filter={filter}
          filterType={filterType}
        />
      </div>
      <div className='container__footer'>
        <p>Click to edit a todo</p>
        <p>Created by Kukharenko Danil</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { todosReducers: { todo, filterType } } = state
  return { todo, filterType, todos: getTodosSelector(state) }
}

const mapDispatchToProps = {
  addTask: addTodo,
  deletTask: deleteTodo,
  deletAllTask: deleteAllTodo,
  updateTask: updateTodo,
  toggleTask: toggleTodo,
  toggleAllTaskComplete: toggleAllTodoComplete,
  toggleAllTaskUncomplete: toggleAllTodoUncomplete,
  setTodo: changeTodoInput,
  filter: setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)