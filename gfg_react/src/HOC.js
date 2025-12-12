import React, { useState } from "react";

function HOC(Component) {
  return function UpdatedComponent() {
    const [count, setCount] = useState(0);
    const handleClick = (value) => {
      setCount((count) => count + value);
    };
    return (
      <>
        <Component count={count} handleClick={handleClick} />
      </>
    );
  };
}

export default HOC;
