import React from "react";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  function handleSubmit() {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div>
      <h1> This is Login page</h1>
      {console.log("Login", isLoggedIn)}
      {!isLoggedIn && (
        <label>
          Enter your name: <input type="text"></input>
        </label>
      )}
      <button onClick={handleSubmit}>{!isLoggedIn ? "Login" : "Logout"}</button>
    </div>
  );
}

export default Login;
