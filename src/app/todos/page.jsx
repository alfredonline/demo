"use client";
import React from "react";
import { useState, useEffect } from "react";

const Page = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = () => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      } else {
        setTodos([]);
      }
    };
    loadTodos();
  }, []);

  const markTodoComplete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
  }

  return (
    <div className="p-4">
      {todos.map((todo) => (
        <div key={todo.id} onClick={() => markTodoComplete(todo.id)}>
          {todo.title} - {todo.description}
        </div>
      ))}
    </div>
  );
};

export default Page;
