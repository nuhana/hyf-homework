import React, { useState } from "react";
import Children from "./children";

const TodoItems = ({
  description,
  todo,
  deleteTodo,
  handleCompleted,
  string,
  handleEdit,
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(description);

  const editTodo = () => setOnEdit(true);

  const handleSave = id => {
    setOnEdit(false);
    if (editValue) {
      handleEdit(editValue, id);
    } else {
      setEditValue(description);
    }
  };

  if (onEdit) {
    return (
      <Children>
        <li className={`todo-item ${todo.completed ? "complete" : ""}`}>
          <input
            type="text"
            id="editValue"
            value={editValue}
            name="editValue"
            onChange={e => setEditValue(e.target.value)}
          ></input>
        </li>
        <button className="save-btn" onClick={() => handleSave(todo.id)}>
          save
        </button>
      </Children>
    );
  } else {
    return (
      <Children>
        <li className={`todo-item ${todo.completed ? "complete" : ""}`}>
          {description} | {string}
        </li>
        <button onClick={() => handleCompleted(todo)} className="complete-btn">
          <i className="fa fa-check"></i>
        </button>
        <button
          onClick={() => {
            deleteTodo(todo);
          }}
          className="trash-btn"
        >
          <i className="fa fa-trash-o"></i>
        </button>

        <button onClick={editTodo} className="edit-btn">
          <i className="fa fa-edit"></i>
        </button>
      </Children>
    );
  }
};

export default TodoItems;
