import React from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import TodoFilter from '../TodoFilter/TodoFilter';

import './style.css';

export const TodoContainer = () => {

  return (
    <div className="containe">
      <div className="container__todo-form">
      <TodoForm />
      </div>
      <div className="container__todo-list">
      <TodoList />
      </div>
      <div className="container__todo-filter">
      <TodoFilter />
      </div>
    </div>
  );
}

