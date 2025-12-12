import React, { useContext } from "react";
import { CounterContext } from "./Context";

export default function Text(/* { count } */) {
  let count = useContext(CounterContext);
  console.log(count);
  return <div>The count is {count}</div>;
}
