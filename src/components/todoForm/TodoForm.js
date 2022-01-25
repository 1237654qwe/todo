import React, { useState } from "react"
import './style.css'
import { TodoList } from "./TodoList"
import { v4 as uuidv4 } from "uuid"

export const TodoForm = ({ todo, setTodo, todos, setTodos }) => {

  const [filterType, setFilterType] = useState("all")
  const todoLeft = todos.filter((item) => item.completed === false)

  const onAllCompleted = () => {
    const targetTodo = todos.map((item) => {
      return {
        ...item,
        completed: item.completed === false ? true : false,
      }
    })
    setTodos(targetTodo)
    console.log(todos)
  }

  const inputChange = (e) => {
    setTodo(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(1)
      setTodos([...todos, { id: uuidv4(), title: todo, completed: false, show: true }])
      setTodo("")
    }
  }

  const showAll = () => {
    setFilterType('all')
  }

  const showActive = () => {
    setFilterType('active')
  }

  const showCompleted = () => {
    setFilterType('completed')
  }

  const getTodos = () => {
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


  const onClear = () => {
    setTodos(todos.filter((item) => item.completed === false))
  }

  const filtredTodos = getTodos()

  return (
    <div className="todo-form">
      <div className="todo-form__input">
        <button className="compliteAllBtn" onClick={onAllCompleted}>❯</button>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todo}
          onChange={inputChange}
          onKeyDown={onKeyDown}
          className="todoInput"
        />
      </div>
      <div className="todo-form__list">
        <TodoList
          todos={filtredTodos}
          setTodos={setTodos}
        />
      </div>
      <div className="todo-form__filters">
        <div className="filter-info">
          {todoLeft.length} items left
        </div>
        <div className="filter-btn">
          <div>
            <button className="btn" onClick={showAll}>All</button>
          </div>
          <div>
            <button className="btn" onClick={showActive}>Active</button>
          </div>
          <div>
            <button className="btn" onClick={showCompleted}>Complited</button>
          </div>
        </div>
        <div className="filter-clear">
          <button className="btn" onClick={onClear}>Clear Complited</button>
        </div>
      </div>
    </div>
  )
}