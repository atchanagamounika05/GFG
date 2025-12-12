//Ref is used to preserve values between re renders, not used to render on UI
//DOM Manipulation
//ref can't send directly in props use forward Ref

import React, { useRef, forwardRef, useState } from "react";

/* forwardRef(function MyInput(props, ref) {
  console.log(props, ref);

  return <input placeholder="type..." ref={ref} />;
}); */

const MyInput = forwardRef((props, ref) => {
  console.log(props, ref);
  return <input placeholder="type..." ref={ref} />;
});

export default function Focus() {
  let inputRef = useRef();
  const focusHandler = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>Input Ref DOM Manipulation</h1>
      <MyInput ref={inputRef} />
      {/* <input placeholder="type..." ref={inputRef} /> */}
      <button onClick={focusHandler}>Focus</button>
    </>
  );
}
