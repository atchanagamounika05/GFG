import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is About page</h1>
      <button onClick={() => navigate("/contact")}>Click</button>
    </>
  );
}

export default About;
