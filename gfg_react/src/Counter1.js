import React from "react";
import HOC from "./HOC";

function Counter1({ count, handleClick }) {
  return (
    <div>
      <p>Counter1: {count}</p>
      <button onClick={() => handleClick(10)}>Increment by 10</button>
    </div>
  );
}

export default HOC(Counter1);
