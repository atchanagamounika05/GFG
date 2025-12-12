import React, { useState } from "react";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  const handleDel = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="add todos..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleDel(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
