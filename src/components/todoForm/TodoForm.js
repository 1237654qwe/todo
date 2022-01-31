import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from 'react-redux';

import {
  addTodo,
  toggleAllTodoComplete,
  toggleAllTodoUncomplete,
  changeTodoInput,
} from "../../redux/todos/actions";
import './style.css';

const TodoForm = ({ 
  todo,
  addTask,
  toggleAllTaskComplete,
  toggleAllTaskUncomplete,
  setTodo,
 }) => {
  const [isCompleted, changeCompleted] = useState(true);

  const getAllCompleted = () => {
    changeCompleted(!isCompleted)
    if (isCompleted) {
      toggleAllTaskComplete();
      return
    }
    toggleAllTaskUncomplete();
  }

  const inputChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    addTask(uuidv4(), todo);
    setTodo("");
    e.preventDefault();
  }

  return (
    <div className="todo-form">
      <div className="todo-form__input">
        <button className="todo-form__btn" onClick={getAllCompleted}>❯</button>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="What needs to be done?"
          value={todo}
          onChange={inputChange}
          className="todoInput"
        />
        </form>
      </div>      
    </div>
  );
}

const mapStateToProps = (state) => {  
  const { todosReducers: { todo } } = state
  return { todo }
}

const mapDispatchToProps = {
  addTask: addTodo,
  toggleAllTaskComplete: toggleAllTodoComplete,
  toggleAllTaskUncomplete: toggleAllTodoUncomplete,
  setTodo: changeTodoInput,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);