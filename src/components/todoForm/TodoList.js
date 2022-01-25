import React from "react"
import './style.css'

export const TodoList = ({ todos, setTodos }) => {

  const onCompleted = ({ id }) => {
    const targetTodo = todos.map((item) => {
      return {
        ...item,
        completed: item.id === id ? !item.completed : item.completed,
      }
    })
    setTodos(targetTodo)
  }

  const onEdit = (e, id) => {
    const targetTodo = todos.map((item) => {
      return {
        ...item,
        title: item.id === id ? e.target.value : item.title,
      }
    })
    setTodos(targetTodo)
  }

  const onRemove = ({ id }) => {
    setTodos(todos.filter((item) => item.id !== id))
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