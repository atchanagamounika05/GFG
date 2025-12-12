import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
  useRef,
  createContext,
  useContext,
  useReducer,
} from "react";

//useState
/* export default function FunCounter() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(`count changed to ${value}`);
  }, [value]);
  return (
    <div>
      <h2>Count: {value}</h2>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  );
} */

//useEffect
/* export default function setTimer() {
  const [msg, setMsg] = useState("waiting...");
  useEffect(() => {
    const timeout = setTimeout(() => setMsg("print after 3 secs"), 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <div>{msg}</div>;
} */

//useMemo
/* export default function Calc({ num }) {
  console.log(num);
  const evaluate = useMemo(() => {
    console.log("calculating...");
    return num * 100;
  }, [num]);
  useEffect(() => {
    console.log(`showing cached value {evaluate}`);
  }, [evaluate]);
  return <p> value is {evaluate}</p>;
} */

//useCallback

/* "The useCallback hook is used to memoize functions in React. It returns the same function reference between renders, unless its dependencies change. This is especially useful when passing functions to memoized child components (React.memo) to prevent unnecessary re-renders.

For example, if I pass a new function to a memoized child on every render, React will think props have changed and re-render it. But with useCallback, the function stays the same unless one of its dependencies changes.

I usually use useCallback when:

I'm passing a function to a child component,

That child is memoized with React.memo,

And I want to avoid re-renders caused by changing function references. */

/* export default function Parent() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultipler] = useState(2);
  const [result, setResult] = useState(0);
  const handleClick = useCallback(() => {
    setResult(count * multiplier);
  }, [multiplier, count]);
  return (
    <>
      <p>count:{count}</p>
      <p>Multiplier:{multiplier}</p>
      <p>result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setMultipler(multiplier + 1)}>
        Change multiply value
      </button>
      <Child handleClick={handleClick} />
    </>
  );
}

const Child = memo(({ handleClick }) => {
  return <button onClick={handleClick}>multipy</button>;
}); */

//useRef

/* export default function FocusInput() {
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
} */

//useContext
/* export const UserContext = createContext();

export default function Child() {
  const user = useContext(UserContext);
  return <div>hello {user}!</div>;
} */

/* export const ThemeContext = createContext();

export default function Themer() {
  const theme = useContext(ThemeContext);
  return (
    <p
      style={{
        background: theme === "dark" ? "black" : "white",
        color: "green",
      }}
    >
      Hai Friend
    </p>
  );
} */

//useReducer

// useReducer --> function (reducer), intialState
// reducer --> state, action

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default function Incrementer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      Count: {state.count}
    </button>
  );
}
