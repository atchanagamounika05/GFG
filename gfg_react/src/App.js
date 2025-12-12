import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Brands from "./Brands";
import SearchBrands from "./SearchBrands";
import AddToCart from "./AddToCart";
import Todo from "./Todo";
import StopWatch from "./Ref";
import Focus from "./RefDom";
import Fetch from "./Fetch";
import CleanUp from "./CleanUp";
import Effects from "./Effects";
import Reducer from "./Reducer";
import Items from "./Items";
import Button from "./context/Button";
import { CounterContext } from "./context/Context";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivateRoute from "./PrivateRoute";
import Login from "./pages/Login";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Demo from "./Demo";

function App() {
  /* let products = [
    { id: 1, item: "Apple" },
    { id: 2, item: "Banana" },
    { id: 3, item: "Grapes" },
    { id: 4, item: "Guava" },
  ]; */
  // let count = 0;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    /* setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // increments only once batch update */
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1); // increments thrice on 1 click
  };
  /* const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
    };
  }; */
  return (
    <div>
      {/* <h1> Friuts Store</h1> */}
      {/*  <ul>
        {products.map((product) => (
          <li
            style={{ backgroundColor: "gray" }} className={`${
              product.id % 2 === 0 ? "bg-clr" : "bg-clr-1"
            } mr-8px`}
            key={product.id}
          >
            {product.item}
          </li>
        ))}
      </ul> */}
      {/* <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      >
        {count}
      </button> */}
      {/*  <button onClick={handleClick}>{count}</button> */}
      {/* <Brands /> */}
      {/* <SearchBrands /> */}
      {/* <AddToCart /> */}
      {/* <Todo /> */}
      {/* <StopWatch /> */}
      {/* <Focus /> */}
      {/* <Fetch /> */}
      {/* <CleanUp /> */}
      {/* <Effects /> */}
      {/* <Reducer /> */}
      {/* <Items /> */}
      {/* <CounterContext.Provider value={count}>
        <Button #count={count}# handleClick={handleClick} />
      </CounterContext.Provider> */}
      {/* <div style={{ textAlign: "center" }}> */}
      {/*  <a href="/">Home </a>
        <a href="/about">About </a>
        <a href="/contact">Contact </a> */}
      {/* <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact </Link> */}
      {/* <NavLink to="/" style={{ color: isActive ? "red" : "blue" }}> */}
      {/* <NavLink to="/" style={getStyles}>
          Home{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/about" style={getStyles}>
          About{" "}
        </NavLink>
        ||
        <NavLink to="/contact" style={getStyles}>
          Contact{" "}
        </NavLink>{" "}
        ||
        <NavLink to="/login" style={getStyles}>
          Login{" "}
        </NavLink>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div> */}
      {/* <Counter1 />
      <Counter2 /> */}
      <Demo />
    </div>
  );
}

export default App;
