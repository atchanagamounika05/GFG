import React, { useState } from "react";
import "./App.css";

export default function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const handleTodo = () => {
    setTodos([...todos, { id: id, task, isCompleted: false }]);
    // setTodos([...todos, { id: uuid(), task, insCompleted: false }]);
    setTask("");
    setId(id + 1);
  };
  const handleDelete = (id) => {
    let res = todos.filter((todo, index) => todo.id !== id);
    console.log(res);
    setTodos(res);
  };
  const handleCheckbox = (id) => {
    let res = todos.map((todo, index) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(res);
  };
  console.log(todos);
  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />

      <button onClick={handleTodo}>Add</button>

      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <input type="checkbox" onChange={() => handleCheckbox(todo.id)} />
            <span className={todo.isCompleted ? "strike" : ""}>
              {todo.task}
            </span>
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </div>
        ))}
    </div>
  );
}
