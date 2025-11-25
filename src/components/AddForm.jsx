"use client";
import { useState } from "react";
export default function AddForm() {
  const [todoObject, setTodoObject] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.name, e.target.value);
    // populate the todo object with its previous values
    setTodoObject({
      ...todoObject,
      [e.target.name]: e.target.value,
    });
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const localStorageTodos = localStorage.getItem("todos")

    todoObject.id = Date.now().toString()

    if (localStorageTodos) {
        localStorage.setItem("todos", JSON.stringify([...JSON.parse(localStorageTodos), todoObject]))
    } else {
        localStorage.setItem("todos", JSON.stringify([todoObject]))
    }

    console.log("Submitting todo:", todoObject);
  }

  // avoid doing
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const [priority, setPriority] = useState("Medium");

  return (
    <div className="p-4 text-md">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            placeholder="Enter todo title"
            onChange={handleInputChange}
            value={todoObject.title}
          />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input
            name="description"
            type="text"
            id="description"
            placeholder="Enter description"
            onChange={handleInputChange}
            value={todoObject.description}
          />
        </div>
        <button type="submit">
            Submit todo
        </button>
      </form>
    </div>
  );
}
