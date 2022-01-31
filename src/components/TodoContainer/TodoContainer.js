import React from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoFilter from '../TodoFilter/TodoFilter';

import './style.css';

export const TodoContainer = () => {

  return (
    <div className="containe">
      <div className="container__todoForm">
      <TodoForm />
      </div>
      <div className="container__todoList">
      <TodoList />
      </div>
      <div className="container__todoFilter">
      <TodoFilter />
      </div>
    </div>
  );
}

