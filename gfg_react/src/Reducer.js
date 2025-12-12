import React, { useReducer } from "react";

export default function Reducer() {
  const initialState = {
    count: 0,
  };

  const reduceFun = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          count: state.count + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        return state;
    }
  };

  const [{ count }, dispatch] = useReducer(reduceFun, initialState);
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <>
      <h1>Use Reducer Hook</h1>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={decrementHandler}>-</button>
    </>
  );
}
