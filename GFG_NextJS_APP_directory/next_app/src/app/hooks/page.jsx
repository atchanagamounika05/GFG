"use client";

import { useState, useEffect, useRef } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [counterTricky, setCounterTricky] = useState(0);
  const [value, setValue] = useState({
    name: "",
    email: "",
  });
  const [input, setInput] = useState("");
  const [debounce, setDebounce] = useState("");

  const inputRef = useRef();
  // In dev mode React uses strict mode "use strict" where useEffect runs twice - sets  2 set Interval instances so incremented twice delete one with cleaner function

  //npm run build
  //npm run start - prod mode
  //clear interval kill the first instance before second interval queues up and execute

  //timeout attach to the page - depandancy changes that useEffect shud be rebound, but before rebound it shoud clear the timeout
  // every time you hit the depandancy before an instance reach to timeout it generate a new instance from starting point killing the last instance
  //instead of creating new state for the each feild in the form you can add a recogniser "data-name" and set the value
  useEffect(() => {
    console.log("consoling");
  }, [count]);
  useEffect(() => {
    const interval = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const timeout = setTimeout(
      () => setCounterTricky((prev) => prev + 1),
      1000
    );
    return () => clearTimeout(timeout);
  }, [count]);
  const handleChange = (e) => {
    let { value } = e.target;
    let ele = e.target.getAttribute("data-name");
    setValue((p) => ({ ...p, [ele]: value }));
  };
  const focusEmail = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("here");
      setDebounce(input);
    }, 300);
    return () => clearTimeout(timeout);
  }, [input]);
  return (
    <div className="flex flex-col">
      {/* <button
        className="px-2 w-auto border-2 border-green-400"
        onClick={() => {
          //setCount(count + 1);
          setCount((prev) => prev + 1);
          console.log("clicked");
        }}
      >
        Increment
      </button>
      {count}
      <h2>Timer: {timer}</h2>
      <h2>Tick: {counterTricky}</h2>
      <input
        type="text"
        className="bg-black border-2 border-white rounded text-gray-200"
        value={value.name}
        data-name="name"
        onChange={handleChange}
      />
      <input
        ref={inputRef}
        type="text"
        className="bg-black border-2 border-white rounded text-gray-200"
        value={value.email}
        data-name="email"
        onChange={handleChange}
      />
      <p>{value.name}</p>
      <p>{value.email}</p>
      <button onClick={focusEmail}>Focus on email </button> */}
      <input
        type="text"
        className="bg-black border-2 border-white rounded text-gray-200"
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Value: {input}</p>
      <p>Debounced Value: {debounce}</p>
    </div>
  );
}
