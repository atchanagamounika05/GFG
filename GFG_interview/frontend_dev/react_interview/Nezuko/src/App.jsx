import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import ClassCounter from "./ClassCounter";
import Todo from "./Todo";
import Search from "./search";
import FetchData from "./FetchData";
import Child from "./hooks/practice";
import Calc from "./hooks/practice";
import Incrementer from "./hooks/practice";
import Parent from "./Parent";
// import Themer, { ThemeContext } from "./hooks/practice";
function App() {
  const [count, setCount] = useState(0);
  const num = 4;

  return (
    <>
      <div>
        {/* <Counter /> */}
        {/* <ClassCounter /> */}
        {/* <Todo /> */}
        {/* <Search /> */}
        {/* <FetchData /> */}
        {/* <Calc num={num} /> */}
        {/* <UserContext.Provider value="Mounika">
          <Child />
        </UserContext.Provider> */}
        {/* <ThemeContext.Provider value="light">
          <Themer />
        </ThemeContext.Provider> */}
        {/* <Incrementer /> */}
        <Parent />
      </div>
    </>
  );
}

export default App;
