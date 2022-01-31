import React, { useEffect, useState } from "react";

import './style.css';

export const TodoFilter = ({ todos, setTodos, filterType, setFilterType }) => {
const [isActive, setIsActive] = useState(false)

  const TodosLeft = todos.filter((item) => item.completed === false);

  const showAll = () => {
    setFilterType('all');
    setIsActive(!isActive)
  }

  const showActive = () => {
    setFilterType('active');
    setIsActive(!isActive)
  }

  const showCompleted = () => {
    setFilterType('completed');
    setIsActive(!isActive)
  }

  const onClear = () => {
    setTodos(todos.filter((item) => item.completed === false));
  }

  return (
    <div className="todo-form__filters">
      <div className="filter-info">
        {TodosLeft.length} items left
      </div>
      <div className="filter-btn">
        <div>
          <button className={filterType === 'all' ? 'active' : 'btn'}  onClick={showAll}>All</button>
        </div>
        <div>
          <button className={filterType === 'active' ? 'active' : 'btn'} onClick={showActive}>Active</button>
        </div>
        <div>
          <button className={filterType === 'completed' ? 'active' : 'btn'} onClick={showCompleted}>Completed</button>
        </div>
      </div>
      <div className="filter-clear">
        <button className="btn" onClick={onClear}>Clear Completed</button>
      </div>
    </div>
  );
}