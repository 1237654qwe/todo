import React from "react";
import { v4 as uuidv4 } from "uuid";

import './style.css';

export const TodoForm = ({ todo, setTodo, todos, setTodos }) => {
  const getAllCompleted = () => {
    const targetTodo = todos.map((item) => {
      return {
        ...item,
        completed: !item.completed,
      }
    })
    setTodos(targetTodo);
  }

  const inputChange = (e) => {
    setTodo(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTodos([...todos, { id: uuidv4(), title: todo, completed: false, show: true }]);
      setTodo('');
    }
  }

  return (
    <div className="todo-form">
      <div className="todo-form__input">
        <button className="todo-form__btn" onClick={getAllCompleted}>❯</button>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={todo}
          onChange={inputChange}
          onKeyDown={onKeyDown}
          className="todoInput"
        />
      </div>      
    </div>
  )
}