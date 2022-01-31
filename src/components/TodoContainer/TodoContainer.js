import React, { useState } from 'react';

import { TodoForm } from '../TodoForm/TodoForm';
import { TodoList } from '../TodoList/TodoList';
import { TodoFilter } from '../TodoFilter/TodoFilter';

import './style.css';

export const TodoContainer = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const getTodosByFilter = () => {
    switch (filterType) {
      case 'all': {
        return todos;
      }

      case 'active': {
        return todos.filter((item) => !item.completed);
      }

      case 'completed': {
        return todos.filter((item) => item.completed);
      }
    }
  }

  const filtredTodos = getTodosByFilter();

  return (
    <div className="containe">
      <div className="container__todoForm">
      <TodoForm
          todo={todo}
          setTodo={setTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className="container__todoList">
      <TodoList
          todos={filtredTodos}
          setTodos={setTodos}
        />
      </div>
      <div className="container__todoFilter">
      <TodoFilter
          todos={todos}
          setTodos={setTodos}
          setFilterType={setFilterType}
          filterType={filterType}
        />
      </div>
    </div>
  );
}