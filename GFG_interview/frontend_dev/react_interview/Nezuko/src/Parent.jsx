import Child from "./Child.JSX";
import { useState } from "react";
export default function Parent() {
  let name = "Shinobu";
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prev) => prev + 1); // Update parent state with trigger from child
  };
  return (
    <>
      <h1>Parent Component</h1>
      <Child name={name} handleIncrement={handleIncrement} count={count} />
    </>
  );
}
