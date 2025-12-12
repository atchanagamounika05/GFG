import React from "react";
import HOC from "./HOC";

function Counter2({ count, handleClick }) {
  return (
    <div>
      <p>Counter2:{count}</p>
      <button onClick={() => handleClick(20)}>Increment by 20</button>
    </div>
  );
}

export default HOC(Counter2);
