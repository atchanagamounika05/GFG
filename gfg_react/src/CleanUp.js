import { useState, useEffect } from "react";

export default function CleanUp() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => setCount((count) => count + 1), 1000);
    return () => clearInterval(timer);
  }, [count]);
  return <>count :{count}</>;
}
