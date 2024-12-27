import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList({ todos, toggleDone }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleDone={() => toggleDone(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
