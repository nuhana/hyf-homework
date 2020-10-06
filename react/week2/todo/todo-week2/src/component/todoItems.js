import React from "react";

const TodoItems = ({ description, todo, deleteTodo, handleCompleted }) => {
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {description}{" "}
      </li>
      <button
        onClick={() => {
          handleCompleted(todo);
        }}
        className="complete-btn"
      >
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
    </div>
  );
};

export default TodoItems;
