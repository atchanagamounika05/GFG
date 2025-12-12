import React, { memo, useState } from "react";

function Demo() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="name"
        value={username}
      />
      <input
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
        value={age}
      />
      <Child age={age} />
    </div>
  );
}

export default Demo;

const Child = memo(({ age }) => {
  console.log("Child rendering");
  return <div>Age is {age}</div>;
});
