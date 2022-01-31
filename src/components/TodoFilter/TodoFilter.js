import React, { useState } from "react";
import { connect } from 'react-redux';

import { getTodosSelector } from "../../redux/todos/selectors/selectors";
import { deleteAllTodo, setFilter } from "../../redux/todos/actions";
import './style.css';

const TodoFilter = ({
  filter,
  filterType,
  deletAllTask,
  todos,
}) => {
  const [isActive, setIsActive] = useState(false);

  const TodosLeft = todos.filter((item) => item.completed === false);

  const showAll = () => {
    filter('all');
    setIsActive(!isActive);
  }

  const showActive = () => {
    filter('active');
    setIsActive(!isActive);
  }

  const showCompleted = () => {
    filter('completed');
    setIsActive(!isActive);
  }

  const onClear = () => {
    const deleted = todos.map((item) => {
      if (item.completed === true) {
        return item
      }
    })
    deletAllTask(deleted);
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

const mapStateToProps = (state) => {
  const { todosReducers: { todo, filterType } } = state
  return { todo, filterType, todos: getTodosSelector(state) }
}

const mapDispatchToProps = {
  deletAllTask: deleteAllTodo,
  filter: setFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);