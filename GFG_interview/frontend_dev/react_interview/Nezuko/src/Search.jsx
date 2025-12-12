import React, { useEffect, useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("here");
      setDebouncedValue(input);
    }, 500);

    return () => clearTimeout(timeout);
  }, [input]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Debounced value : {debouncedValue}</div>
      <div>input: {input}</div>
    </>
  );
}
