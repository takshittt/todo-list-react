import React from "react";
import "./TodoList.css";

function TodoItem({ todo, toggleDone }) {
  return (
    <div className={`todo-item ${todo.done ? "done" : ""}`}>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <button onClick={toggleDone}>
        Mark as {todo.done ? "Not Done" : "Done"}
      </button>
    </div>
  );
}

export default TodoItem;
