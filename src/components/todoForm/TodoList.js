import React from "react"
import './style.css'

export const TodoList = ({ todos, deletTask, updateTask, toggleTask }) => {

  const onCompleted = ({ id }) => {
    toggleTask(id)
  }

  const onEdit = (e, id) => {
    updateTask(id, e.target.value)
  }

  const onRemove = ({ id }) => {
    deletTask(id)
  }

  return (
    <div className="todo__task">
      {todos.map((item) => (
        <div className="task" key={item.id}>
          <div className="task__check">
            <input
              type="checkbox"
              onChange={() => onCompleted(item)}
              checked={item.completed}
            />
          </div>
          {
            item.completed
              ?
              <div className="task__text_done" >
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => onEdit(e, item.id)}
                />
              </div>
              :
              <div className="task__text" >
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => onEdit(e, item.id)}
                />
              </div>
          }
          <button className="remove-btn" onClick={() => onRemove(item)}>×</button>
        </div>
      ))}
    </div>
  )
}