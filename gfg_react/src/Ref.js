import React, { useRef, useState } from "react";

export default function StopWatch() {
  const [count, setCount] = useState(0);
  let timer = useRef();
  const handleStart = () => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timer.current);
  };
  return (
    <>
      <h1>Stop Watch</h1>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
