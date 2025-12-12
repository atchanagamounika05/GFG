import React, { useState } from "react";
import "./counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  /* const handleReset = () => {
    setCount(0);
  }; */
  return (
    <div className="card">
      <h2>Counter</h2>
      <p>{count}</p>
      <button className="btn-plus noHover" onClick={handleIncrement}>
        +
      </button>
      <button className="btn-minus" onClick={handleDecrement}>
        -
      </button>
      <button
        className="btn-star"
        onClick={() => {
          setCount(0);
        }}
      >
        *
      </button>
    </div>
  );
}

export default Counter;
