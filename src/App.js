import React, { useEffect, useState } from 'react'
import { Header } from './components/header/Header'
import './App.css'
import { TodoForm } from './components/todoForm/TodoForm'

const App = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className='container'>
      <div className='container__header'>
        <Header />
      </div>
      <div className='container__todo'>
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className='container__footer'>
        <p>Click to edit a todo</p>
        <p>Created by Kukharenko Danil</p>
      </div>
    </div>
  )
}

export default App